import { ArrowDown, ArrowUpRight } from "lucide-react";
import { resumeUrl, social } from "@/data/social";
import FieldCanvas from "./hero/field-canvas";
import { cta } from "./shared/cta";
import Magnetic from "./shared/magnetic";
import Words from "./shared/words";

const stack = ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL']

const delay = (ms: number) => ({ "--delay": `${ms}ms` } as React.CSSProperties)

const HeroSection = () => {
    return (
        <section
         id="top"
         aria-label="Apresentação"
         className="relative flex min-h-[100svh] flex-col pt-16"
        >
            <div className="container-page relative flex flex-1 flex-col">
                <FieldCanvas
                 className="enter pointer-events-none absolute top-0 bottom-[40%] right-4 left-1/4 md:bottom-0 md:right-8 md:left-[42%] xl:right-12
                            [mask-image:radial-gradient(ellipse_70%_75%_at_60%_45%,#000_35%,transparent_100%)]"
                />

                <div className="enter grid-page relative gap-y-2 border-b border-border py-5" style={delay(0)}>
                    <p className="meta col-span-2 text-foreground md:col-span-3">Leonardo Trojan</p>
                    <p className="meta col-span-2 text-muted-foreground md:col-span-3">Engenheiro full-stack</p>
                    <p className="meta col-span-2 hidden text-muted-foreground md:col-span-3 md:block">Produto / Arquitetura / Web</p>
                    <p className="meta col-span-2 hidden text-right text-muted-foreground md:col-span-3 md:block">
                        Portfólio © {new Date().getFullYear()}
                    </p>
                </div>

                <div className="relative flex flex-1 flex-col justify-center py-12 md:py-16">
                    <h1
                     lang="en"
                     className="display text-[clamp(3rem,13.5vw,5.5rem)] md:text-[clamp(4.5rem,8.6vw,9rem)]"
                    >
                        <span className="block"><Words text="Building" delay={150} /></span>
                        <span className="block md:pl-[calc((100%+1.5rem)/12*2)]"><Words text="digital products" delay={230} /></span>
                        <span className="block">
                            <Words text="that feel" delay={390} />{' '}
                            <span className="mask">
                                <span style={delay(550)} className="text-muted-foreground">
                                    alive<span className="text-signal-ink">.</span>
                                </span>
                            </span>
                        </span>
                    </h1>
                </div>

                <div className="grid-page relative gap-y-10 border-t border-border pb-8 pt-6 md:pb-10">
                    <div className="enter col-span-4 md:col-span-6 lg:col-span-5" style={delay(650)}>
                        <p className="text-balance text-xl font-medium leading-snug tracking-tight sm:text-2xl">
                            Transformo ideias complexas em software com significado.
                        </p>
                        <p className="mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">
                            Construo aplicações web e mobile bem estruturadas e orientadas a produto, da interface
                            à infraestrutura que a mantém de pé.
                        </p>
                    </div>

                    <div className="enter col-span-4 md:col-span-3 lg:col-start-8 lg:col-span-2" style={delay(720)}>
                        <p className="meta text-muted-foreground">Stack principal</p>
                        <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm md:grid-cols-1" aria-label="Principais tecnologias">
                            {stack.map((tech) => <li key={tech}>{tech}</li>)}
                        </ul>
                    </div>

                    <div
                     className="enter col-span-4 flex flex-col items-start gap-4 md:col-span-3 md:items-end md:justify-end"
                     style={delay(800)}
                    >
                        <Magnetic>
                            <a href="#work" className={cta({ size: 'lg' })}>
                                Explorar projetos
                                <ArrowDown className="group-hover/cta:translate-y-1" />
                            </a>
                        </Magnetic>
                        <div className="flex gap-6">
                            <a href={resumeUrl} download className={cta({ variant: 'ghost', size: 'sm' })}>
                                Currículo
                            </a>
                            <a href={social.github.url} target="_blank" rel="noopener noreferrer" className={cta({ variant: 'ghost', size: 'sm' })}>
                                GitHub
                                <ArrowUpRight className="group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                                <span className="sr-only">(abre em nova aba)</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default HeroSection;
