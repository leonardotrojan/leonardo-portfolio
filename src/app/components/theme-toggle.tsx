"use client"

import { Moon } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Moon className='cursor-pointer hover:scale-[130%] transition delay-150'/>
        </button>
    )
}