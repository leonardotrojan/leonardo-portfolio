"use client"

import { useEffect, useRef } from "react";

const SPACING = 30
const RADIUS = 240
const PUSH = 22

/**
 * Nós de uma pequena rede, em coordenadas de célula relativas ao canto
 * superior direito; um pacote percorre as arestas em sequência.
 */
const NODES: [number, number][] = [[-3, 3], [-8, 3], [-8, 8], [-14, 8], [-4, 11], [-11, 14]]
const EDGES: [number, number][] = [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5]]

interface Palette {
    ink: string
    signal: string
}

const readPalette = (): Palette => {
    const styles = getComputedStyle(document.documentElement)
    return {
        ink: styles.getPropertyValue("--foreground").trim() || "#e8e8e3",
        signal: styles.getPropertyValue("--signal-ink").trim() || "#c5ff4a",
    }
}

/**
 * Campo de pontos sobre a mesma métrica da grade da página. Perto do cursor
 * os pontos se afastam e a malha entre eles aparece; longe dele, o campo
 * respira devagar. Sem cursor (toque), um atrator percorre uma curva lenta.
 */
const FieldCanvas = ({ className }: { className?: string }) => {

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const readoutRef = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext("2d")
        if (!canvas || !ctx) return

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        let palette = readPalette()
        let width = 0
        let height = 0
        let cols = 0
        let rows = 0
        let frame = 0
        let running = false
        let px = new Float32Array(0)
        let py = new Float32Array(0)
        let pf = new Float32Array(0)
        const pointer = { x: 0, y: 0, active: false }
        const attractor = { x: 0, y: 0 }

        const resize = () => {
            const rect = canvas.getBoundingClientRect()
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            width = rect.width
            height = rect.height
            canvas.width = Math.round(width * dpr)
            canvas.height = Math.round(height * dpr)
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            cols = Math.ceil(width / SPACING) + 1
            rows = Math.ceil(height / SPACING) + 1
            px = new Float32Array(cols * rows)
            py = new Float32Array(cols * rows)
            pf = new Float32Array(cols * rows)
            attractor.x = width * 0.62
            attractor.y = height * 0.45
        }

        const nodePoint = ([cx, cy]: [number, number]) => ({
            x: (cols - 1 + cx) * SPACING,
            y: cy * SPACING,
        })

        const draw = (time: number) => {
            const t = time / 1000

            if (pointer.active) {
                attractor.x += (pointer.x - attractor.x) * 0.12
                attractor.y += (pointer.y - attractor.y) * 0.12
            } else if (!reduceMotion) {
                const tx = width * (0.6 + Math.sin(t * 0.21) * 0.25)
                const ty = height * (0.45 + Math.sin(t * 0.33) * 0.28)
                attractor.x += (tx - attractor.x) * 0.02
                attractor.y += (ty - attractor.y) * 0.02
            }

            ctx.clearRect(0, 0, width, height)

            // Posições deslocadas e intensidade de cada ponto.
            for (let j = 0; j < rows; j++) {
                for (let i = 0; i < cols; i++) {
                    const k = j * cols + i
                    const bx = i * SPACING
                    const by = j * SPACING
                    const dx = bx - attractor.x
                    const dy = by - attractor.y
                    const d = Math.hypot(dx, dy) || 1
                    const f = Math.max(0, 1 - d / RADIUS) ** 2
                    px[k] = bx + (dx / d) * f * PUSH
                    py[k] = by + (dy / d) * f * PUSH
                    pf[k] = f
                }
            }

            // Malha: só aparece onde o campo está perturbado.
            ctx.lineWidth = 1
            ctx.strokeStyle = palette.ink
            for (let j = 0; j < rows; j++) {
                for (let i = 0; i < cols; i++) {
                    const k = j * cols + i
                    if (pf[k] < 0.04) continue
                    ctx.globalAlpha = Math.min(0.28, pf[k] * 0.5)
                    ctx.beginPath()
                    if (i + 1 < cols) {
                        ctx.moveTo(px[k], py[k])
                        ctx.lineTo(px[k + 1], py[k + 1])
                    }
                    if (j + 1 < rows) {
                        ctx.moveTo(px[k], py[k])
                        ctx.lineTo(px[k + cols], py[k + cols])
                    }
                    ctx.stroke()
                }
            }

            // Pontos.
            for (let j = 0; j < rows; j++) {
                for (let i = 0; i < cols; i++) {
                    const k = j * cols + i
                    const wave = reduceMotion ? 0.5 : (Math.sin(i * 0.35 + t * 0.8) * Math.cos(j * 0.3 - t * 0.5) + 1) / 2
                    const f = pf[k]
                    const hot = f > 0.35
                    ctx.globalAlpha = hot ? Math.min(1, f + 0.2) : 0.12 + wave * 0.14 + f * 0.6
                    ctx.fillStyle = hot ? palette.signal : palette.ink
                    const s = 1.2 + f * 1.8
                    ctx.fillRect(px[k] - s / 2, py[k] - s / 2, s, s)
                }
            }

            // Rede de nós com um pacote percorrendo as arestas.
            ctx.strokeStyle = palette.ink
            ctx.globalAlpha = 0.35
            ctx.beginPath()
            EDGES.forEach(([a, b]) => {
                const pa = nodePoint(NODES[a])
                const pb = nodePoint(NODES[b])
                ctx.moveTo(pa.x, pa.y)
                ctx.lineTo(pb.x, pb.y)
            })
            ctx.stroke()

            NODES.forEach((node, n) => {
                const p = nodePoint(node)
                ctx.globalAlpha = 1
                ctx.fillStyle = n === 0 ? palette.signal : palette.ink
                ctx.fillRect(p.x - 3, p.y - 3, 6, 6)
            })

            if (!reduceMotion) {
                const progress = (t * 0.45) % EDGES.length
                const [a, b] = EDGES[Math.floor(progress)]
                const local = progress % 1
                const pa = nodePoint(NODES[a])
                const pb = nodePoint(NODES[b])
                ctx.globalAlpha = 1
                ctx.fillStyle = palette.signal
                ctx.fillRect(pa.x + (pb.x - pa.x) * local - 2, pa.y + (pb.y - pa.y) * local - 2, 4, 4)
            }

            ctx.globalAlpha = 1

            if (readoutRef.current) {
                readoutRef.current.textContent =
                    `x ${String(Math.round(attractor.x)).padStart(4, "0")} · y ${String(Math.round(attractor.y)).padStart(4, "0")}`
            }
        }

        const loop = (time: number) => {
            draw(time)
            frame = requestAnimationFrame(loop)
        }

        const start = () => {
            if (running || reduceMotion) return
            running = true
            frame = requestAnimationFrame(loop)
        }

        const stop = () => {
            running = false
            cancelAnimationFrame(frame)
        }

        const onPointerMove = (event: PointerEvent) => {
            if (event.pointerType !== "mouse") return
            const rect = canvas.getBoundingClientRect()
            pointer.x = event.clientX - rect.left
            pointer.y = event.clientY - rect.top
            pointer.active = pointer.y > -80 && pointer.y < rect.height + 80
        }

        const onPointerLeave = () => {
            pointer.active = false
        }

        resize()
        draw(0)

        const resizeObserver = new ResizeObserver(() => {
            resize()
            if (!running) draw(performance.now())
        })
        resizeObserver.observe(canvas)

        const visibility = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
        visibility.observe(canvas)

        // Troca de tema altera a classe do <html>; relê as cores.
        const themeObserver = new MutationObserver(() => {
            palette = readPalette()
            if (!running) draw(performance.now())
        })
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

        window.addEventListener("pointermove", onPointerMove, { passive: true })
        document.documentElement.addEventListener("pointerleave", onPointerLeave)

        return () => {
            stop()
            resizeObserver.disconnect()
            visibility.disconnect()
            themeObserver.disconnect()
            window.removeEventListener("pointermove", onPointerMove)
            document.documentElement.removeEventListener("pointerleave", onPointerLeave)
        }
    }, [])

    return (
        <div className={className} aria-hidden="true">
            <canvas ref={canvasRef} className="size-full" />
            <span ref={readoutRef} className="meta absolute bottom-3 right-0 tabular-nums text-muted-foreground" />
        </div>
    );
}

export default FieldCanvas;
