"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
         className="border-0"
        >
            {theme === 'dark' ? <Sun className='cursor-pointer hover:scale-[130%] transition delay-150'/> : <Moon className='cursor-pointer hover:scale-[130%] transition delay-150'/> }
        </button>
    )
}