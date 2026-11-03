import { projectIndex, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "../shared/reveal";
import ProjectVisual from "./project-visual";

interface CaseStudyProps {
    project: Project
    /** Inverte o lado da prévia para alternar o ritmo da seção. */
    flip?: boolean
}

const CaseStudy = ({ project, flip = false }: CaseStudyProps) => {
    const href = `/work/${project.slug}`

    return (
        <article className="grid-page group gap-y-8 border-t border-border pt-6 md:pt-8" aria-labelledby={`${project.slug}-title`}>
            <Reveal className={cn("col-span-4 md:col-span-12 lg:col-span-7", flip && "lg:col-start-6 lg:row-start-1")}>
                <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
                    <ProjectVisual project={project} className="aspect-[4/5] sm:aspect-[4/3]" />
                </Link>
            </Reveal>

            <Reveal
             delay={120}
             className={cn(
                "col-span-4 flex flex-col md:col-span-8 lg:col-span-5 lg:pb-2",
                flip ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8"
             )}
            >
                <p className="meta flex items-center justify-between text-muted-foreground">
                    <span><span className="text-signal-ink">({projectIndex(project)})</span> {project.category}</span>
                    <span>{project.status}</span>
                </p>

                <h3 id={`${project.slug}-title`} className="display mt-8 text-[2.25rem] sm:text-5xl lg:text-[clamp(2.5rem,4vw,4rem)]">
                    <Link href={href} className="transition-colors duration-300 hover:text-signal-ink">
                        {project.name}
                    </Link>
                </h3>

                <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground md:text-[17px] lg:mb-10">
                    {project.description}
                </p>

                <dl className="mt-10 grid grid-cols-[6rem_1fr] gap-y-3 border-t border-border pt-5 text-sm lg:mt-auto">
                    <dt className="meta pt-0.5 text-muted-foreground">Papel</dt>
                    <dd>{project.role}</dd>
                    <dt className="meta pt-0.5 text-muted-foreground">Stack</dt>
                    <dd className="text-muted-foreground">{project.stack.join(' / ')}</dd>
                </dl>

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
                    <Link
                     href={href}
                     className="group/link inline-flex items-center gap-3 border-b border-foreground pb-1 font-mono text-xs uppercase tracking-[0.08em]
                                transition-colors duration-300 hover:border-signal-ink hover:text-signal-ink"
                    >
                        Estudo de caso
                        <ArrowRight className="size-4 transition-transform duration-300 ease-out-expo group-hover/link:translate-x-1" />
                        <span className="sr-only">: {project.name}</span>
                    </Link>
                    {project.liveUrl && (
                        <a
                         href={project.liveUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="group/link inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-muted-foreground
                                    transition-colors duration-300 hover:text-foreground"
                        >
                            Ao vivo
                            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                            <span className="sr-only">: {project.name} (abre em nova aba)</span>
                        </a>
                    )}
                </div>
            </Reveal>
        </article>
    );
}

export default CaseStudy;
