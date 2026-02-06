"use client"

import { icones } from "@/data/icones";
import { technologies } from "@/data/technologies";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TechnologyProps {
    technology: keyof typeof technologies
    icone: keyof typeof icones
}

const IconContainer = ({technology, icone}: TechnologyProps) => {

    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null


    const IconComponent = icones[icone]

    return ( 
        <div className="border border-zinc-300 dark:border-zinc-700
                        px-10 py-5 rounded-2xl
                        bg-gradient-to-br from-[rgb(var(--card-gradient-start)/1)]
                        to-[rgb(var(--card-gradient-end)/1)]
                        transition-colors duration-300">
            <div className="flex items-center gap-x-3 mb-3">
                <div>
                    < IconComponent
                    className="w-6 h-6 text-foreground/80"/>
                </div>
                <h1 className="font-semibold text-xl capitalize text-foreground">{technology}</h1>
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                {Object.values(technologies[technology]).map((tech) => (
                    <div
                     key={tech.name}
                     className="w-full text-center flex flex-col items-center gap-y-1 text-xs
                                p-3 rounded-md
                                bg-background text-foreground
                                border border-border
                                transition-colors duration-300
                                hover:bg-foreground/5"
                    >
                        <div className="w-10 h-10 flex items-center">
                            <Image
                             src={tech.url}
                              alt={tech.name}
                              width={100}
                              height={100}
                              className="object-contain"
                            />
                        </div>
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default IconContainer;