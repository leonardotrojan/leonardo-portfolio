"use client"

import { projectIndex, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

/**
 * Índice dos demais projetos em formato de tabela. Com mouse, uma prévia do
 * projeto sob o cursor acompanha o ponteiro; em toque, a lista basta.
 */
const ProjectIndex = ({ projects }: { projects: Project[] }) => {

    const previewRef = useRef<HTMLDivElement>(null)
    const [hovered, setHovered] = useState<string | null>(null)

    const onPointerMove = (event: React.PointerEvent<HTMLUListElement>) => {
        const node = previewRef.current
        if (!node || event.pointerType !== "mouse") return
        node.style.transform = `translate3d(${event.clientX + 24}px, ${event.clientY - 90}px, 0)`
    }

    return (
        <div className="relative">
            <div className="meta hidden grid-cols-12 gap-6 border-b border-border pb-3 text-muted-foreground md:grid" aria-hidden="true">
                <span className="col-span-1">Nº</span>
                <span className="col-span-5">Projeto</span>
                <span className="col-span-2">Categoria</span>
                <span className="col-span-4">Stack</span>
            </div>

            <ul onPointerMove={onPointerMove} onPointerLeave={() => setHovered(null)}>
                {projects.map((project) => (
                    <li key={project.slug} className="border-b border-border">
                        <Link
                         href={`/work/${project.slug}`}
                         onPointerEnter={(event) => event.pointerType === "mouse" && setHovered(project.slug)}
                         className="group grid grid-cols-4 items-baseline gap-x-4 gap-y-2 py-6 md:grid-cols-12 md:gap-x-6 md:py-7"
                        >
                            <span className="meta col-span-1 text-muted-foreground transition-colors duration-300 group-hover:text-signal-ink">
                                {projectIndex(project)}
                            </span>
                            <span
                             className="col-span-3 text-2xl font-medium tracking-[-0.03em] transition-transform duration-500 ease-out-expo group-hover:translate-x-2 md:col-span-5 md:text-4xl"
                            >
                                {project.name}
                            </span>
                            <span className="meta col-span-2 col-start-2 text-muted-foreground md:col-span-2 md:col-start-auto">
                                {project.category}
                            </span>
                            <span className="col-span-2 flex items-baseline justify-between gap-4 text-sm text-muted-foreground md:col-span-4">
                                <span className="hidden md:inline">{project.stack.join(' / ')}</span>
                                <ArrowRight
                                 className="hidden size-4 shrink-0 -translate-x-2 self-center text-foreground opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-x-0 group-hover:opacity-100 md:block"
                                 aria-hidden="true"
                                />
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>

            <div
             ref={previewRef}
             aria-hidden="true"
             className="pointer-events-none fixed left-0 top-0 z-40 hidden transition-transform duration-500 ease-out-expo lg:block"
            >
                <div
                 className={cn(
                    "relative aspect-[4/3] w-80 overflow-hidden border border-border-strong bg-surface transition-[opacity,scale] duration-300",
                    hovered ? "scale-100 opacity-100" : "scale-95 opacity-0"
                 )}
                >
                    {projects.map((project) => project.image && (
                        <Image
                         key={project.slug}
                         src={project.image}
                         alt=""
                         fill
                         sizes="320px"
                         className={cn(
                            "object-cover object-left-top transition-opacity duration-300",
                            hovered === project.slug ? "opacity-100" : "opacity-0"
                         )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectIndex;
