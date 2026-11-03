"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

export function ThemeToggle() {

    const { resolvedTheme, setTheme } = useTheme()
    const mounted = useSyncExternalStore(subscribe, () => true, () => false)

    // Antes de montar o tema é desconhecido no servidor; espera para não divergir na hidratação.
    const isDark = mounted && resolvedTheme === "dark"

    return (
        <button
         type="button"
         onClick={() => setTheme(isDark ? "light" : "dark")}
         aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
         className="grid size-10 cursor-pointer place-items-center text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
            {mounted
                ? (isDark ? <Sun className="size-4" strokeWidth={1.5} /> : <Moon className="size-4" strokeWidth={1.5} />)
                : <span className="size-4" aria-hidden="true" />}
        </button>
    )
}
