import { cn } from "@/lib/utils";
import Reveal from "./reveal";
import Words from "./words";

interface SectionHeaderProps {
    index: string
    label: string
    title: string
    description?: React.ReactNode
    id: string
    className?: string
}

/**
 * Cabeçalho de seção na grade: rótulo numerado nas 3 primeiras colunas,
 * título de exibição no restante e uma régua que marca o início da seção.
 */
const SectionHeader = ({ index, label, title, description, id, className }: SectionHeaderProps) => {
    return (
        <div className={cn("grid-page gap-y-8 border-t border-border-strong pt-6", className)}>
            <Reveal className="col-span-4 md:col-span-3">
                <p className="meta flex gap-3 text-muted-foreground">
                    <span className="text-signal-ink">({index})</span>
                    {label}
                </p>
            </Reveal>
            <div className="col-span-4 md:col-span-9">
                <Reveal mode="words">
                    <h2 id={id} className="display text-balance text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                        <Words text={title} stagger={50} />
                    </h2>
                </Reveal>
                {description && (
                    <Reveal delay={150}>
                        <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                            {description}
                        </p>
                    </Reveal>
                )}
            </div>
        </div>
    );
}

export default SectionHeader;
