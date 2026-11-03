"use client"

import { cn } from "@/lib/utils";
import { useRef } from "react";

interface MagneticProps {
    children: React.ReactNode
    className?: string
    /** Fração do deslocamento do ponteiro que o elemento acompanha. */
    strength?: number
}

const canAttract = () =>
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches

/**
 * Puxa o conteúdo levemente em direção ao cursor. Escreve o transform direto
 * no DOM para não re-renderizar a cada movimento do ponteiro.
 */
const Magnetic = ({ children, className, strength = 0.3 }: MagneticProps) => {

    const ref = useRef<HTMLSpanElement>(null)

    const onPointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
        const node = ref.current
        if (!node || !canAttract()) return
        const rect = node.getBoundingClientRect()
        const x = (event.clientX - rect.left - rect.width / 2) * strength
        const y = (event.clientY - rect.top - rect.height / 2) * strength
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onPointerLeave = () => {
        if (ref.current) ref.current.style.transform = ""
    }

    return (
        <span
         ref={ref}
         onPointerMove={onPointerMove}
         onPointerLeave={onPointerLeave}
         className={cn("inline-flex transition-transform duration-500 ease-out-expo will-change-transform", className)}
        >
            {children}
        </span>
    );
}

export default Magnetic;
