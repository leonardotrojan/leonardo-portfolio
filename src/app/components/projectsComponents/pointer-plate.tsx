"use client"

import { cn } from "@/lib/utils";
import { useRef } from "react";

/**
 * Expõe a posição do ponteiro sobre a prévia como `--px`/`--py` (-1 a 1),
 * para as camadas internas se moverem em profundidades diferentes via CSS.
 */
const PointerPlate = ({ children, className }: { children: React.ReactNode, className?: string }) => {

    const ref = useRef<HTMLDivElement>(null)

    const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        const node = ref.current
        if (!node || event.pointerType !== "mouse") return
        const rect = node.getBoundingClientRect()
        node.style.setProperty("--px", (((event.clientX - rect.left) / rect.width) * 2 - 1).toFixed(3))
        node.style.setProperty("--py", (((event.clientY - rect.top) / rect.height) * 2 - 1).toFixed(3))
    }

    const onPointerLeave = () => {
        ref.current?.style.setProperty("--px", "0")
        ref.current?.style.setProperty("--py", "0")
    }

    return (
        <div ref={ref} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave} className={cn("[--px:0] [--py:0]", className)}>
            {children}
        </div>
    );
}

export default PointerPlate;
