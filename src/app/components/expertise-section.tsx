import { alsoWorkWith, capabilities } from "@/data/technologies";
import Reveal from "./shared/reveal";
import SectionHeader from "./shared/section-header";

const ExpertiseSection = () => {
    return (
        <section id="expertise" aria-labelledby="expertise-title" className="section-y scroll-mt-16">
            <div className="container-page">
                <SectionHeader
                 id="expertise-title"
                 index="03"
                 label="Expertise"
                 title="Capacidades, não só ferramentas."
                 description="Ferramentas mudam a cada ciclo. O que fica é saber em que camada um problema mora e como resolvê-lo ali."
                />

                <ol className="mt-20 md:mt-28">
                    {capabilities.map((capability, i) => (
                        <li key={capability.id}>
                            <Reveal delay={(i % 3) * 60}>
                                <div
                                 className="group grid-page relative gap-y-4 border-t border-border py-8 transition-colors duration-500
                                            hover:border-foreground md:py-10"
                                >
                                    <span
                                     aria-hidden="true"
                                     className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-signal-ink transition-transform duration-700
                                                ease-out-expo group-hover:scale-x-100"
                                    />
                                    <span className="meta col-span-1 pt-2 text-muted-foreground transition-colors duration-300 group-hover:text-signal-ink md:col-span-1">
                                        0{i + 1}
                                    </span>
                                    <h3
                                     className="col-span-3 text-[1.75rem] font-medium leading-none tracking-[-0.04em] transition-transform duration-500
                                                ease-out-expo md:col-span-4 md:text-4xl md:group-hover:translate-x-2 xl:text-5xl"
                                    >
                                        {capability.title}
                                    </h3>
                                    <p className="col-span-4 text-pretty text-[15px] leading-relaxed text-muted-foreground md:col-span-4 md:pt-1">
                                        {capability.statement}
                                    </p>
                                    <ul
                                     className="col-span-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs leading-relaxed text-muted-foreground
                                                md:col-span-3 md:justify-end md:pt-1.5"
                                     aria-label={`Ferramentas de ${capability.title}`}
                                    >
                                        {capability.tools.map((tool) => (
                                            <li key={tool} className="transition-colors duration-300 group-hover:text-foreground">{tool}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ol>

                <Reveal className="border-t border-border pt-6">
                    <p className="text-sm text-muted-foreground">
                        <span className="meta mr-4">Também</span>
                        {alsoWorkWith.join(' / ')}
                    </p>
                </Reveal>
            </div>
        </section>
     );
}

export default ExpertiseSection;
