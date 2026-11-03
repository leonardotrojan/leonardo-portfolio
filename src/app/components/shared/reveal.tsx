"use client"

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface RevealProps {
    children: React.ReactNode
    className?: string
    delay?: number
    /** `words`: em vez de esmaecer o bloco, sobe as palavras de `<Words />`. */
    mode?: 'fade' | 'words'
}

const Reveal = ({ children, className, delay = 0, mode = 'fade' }: RevealProps) => {

    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    observer.disconnect()
                }
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <div
         ref={ref}
         data-visible={visible}
         className={cn(mode === 'words' ? "reveal-words" : "reveal", className)}
         style={{ "--delay": `${delay}ms` } as React.CSSProperties}
        >
            {children}
        </div>
    );
}

export default Reveal;
