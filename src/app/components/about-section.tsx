import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { resumeUrl } from "@/data/social";
import Reveal from "./shared/reveal";
import Words from "./shared/words";

const principles = [
    {
        title: 'Produto antes de stack',
        text: 'A tecnologia é escolhida pelo problema, não o contrário. Antes de abrir o editor, quero entender quem usa e o que precisa mudar.',
    },
    {
        title: 'Arquitetura que aguenta mudança',
        text: 'Camadas claras, tipos de ponta a ponta e decisões técnicas com propósito, para o sistema crescer sem precisar ser reescrito.',
    },
    {
        title: 'Responsável pelo resultado',
        text: 'Do banco de dados ao deploy, do back-end ao app no bolso de alguém. Gosto de responder pelo produto inteiro, não só por uma parte dele.',
    },
]

const now = [
    'Aberto a oportunidades como desenvolvedor full-stack',
    'Construindo o N.E.R.O., uma plataforma pessoal de orquestração de IA',
]

const AboutSection = () => {
    return (
        <section id="about" aria-labelledby="about-title" className="section-y scroll-mt-16">
            <div className="container-page">
                <div className="grid-page gap-y-12 border-t border-border-strong pt-6">
                    <div className="col-span-4 md:col-span-3">
                        <Reveal>
                            <p className="meta flex gap-3 text-muted-foreground">
                                <span className="text-signal-ink">(02)</span>
                                Sobre
                            </p>
                        </Reveal>
                        <Reveal delay={100} className="mt-10 max-md:max-w-[14rem] md:mt-16">
                            <figure>
                                <div className="group relative aspect-[4/5] overflow-hidden bg-surface">
                                    <Image
                                     src="/leo-picture.jpeg"
                                     alt="Retrato de Leonardo Trojan"
                                     fill
                                     sizes="(min-width: 768px) 22vw, 224px"
                                     className="object-cover object-[50%_40%] grayscale contrast-[1.1] transition-[filter,scale] duration-1000 ease-out-expo
                                                group-hover:scale-[1.03] group-hover:grayscale-0"
                                    />
                                </div>
                                <figcaption className="meta mt-3 flex justify-between text-muted-foreground">
                                    <span>Leonardo Trojan</span>
                                    <span>Fig. 02</span>
                                </figcaption>
                            </figure>
                        </Reveal>
                    </div>

                    <div className="col-span-4 md:col-span-9">
                        <Reveal mode="words">
                            <h2
                             id="about-title"
                             className="text-balance text-[2.25rem] font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl"
                            >
                                <Words text="Engenheiro full-stack com instinto de produto." stagger={40} />{' '}
                                <span className="text-muted-foreground">
                                    <Words text="Do problema de quem usa à arquitetura por trás dele." delay={280} stagger={40} />
                                </span>
                            </h2>
                        </Reveal>

                        <div className="mt-14 grid gap-6 text-base leading-relaxed text-muted-foreground md:mt-20 md:grid-cols-2 md:gap-6 md:text-[17px]">
                            <Reveal delay={80}>
                                <p>
                                    <span className="text-foreground">Sou desenvolvedor full-stack</span> e trabalho principalmente
                                    com JavaScript e TypeScript, do front-end ao back-end, do navegador ao celular. Busco clareza
                                    de arquitetura, código limpo e boas práticas em tudo que construo.
                                </p>
                            </Reveal>
                            <Reveal delay={160}>
                                <p>
                                    Gosto de entender o porquê por trás das decisões técnicas. Aprendo na prática, transformando
                                    ideias em produtos funcionais: hoje isso vai de um marketplace de treinos em produção a uma
                                    plataforma própria de orquestração de IA.
                                </p>
                            </Reveal>
                        </div>

                        <ol className="mt-20 grid gap-6 md:mt-28 md:grid-cols-3">
                            {principles.map(({ title, text }, i) => (
                                <li key={title}>
                                    <Reveal delay={i * 100} className="flex h-full flex-col border-t border-foreground pt-5 pb-10 md:pb-0">
                                        <span className="meta text-signal-ink">0{i + 1}</span>
                                        <h3 className="mt-8 text-xl font-medium tracking-[-0.02em]">{title}</h3>
                                        <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
                                    </Reveal>
                                </li>
                            ))}
                        </ol>

                        <Reveal className="mt-20 grid gap-8 border-t border-border pt-6 md:grid-cols-9 md:gap-6">
                            <p className="meta text-muted-foreground md:col-span-3">Agora</p>
                            <ul className="space-y-2 text-[15px] md:col-span-4">
                                {now.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                            <div className="md:col-span-2 md:text-right">
                                <a
                                 href={resumeUrl}
                                 download
                                 className="group inline-flex items-center gap-2 border-b border-foreground pb-1 font-mono text-xs uppercase tracking-[0.08em]
                                            transition-colors duration-300 hover:border-signal-ink hover:text-signal-ink"
                                >
                                    Currículo
                                    <ArrowDown className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                                </a>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
     );
}

export default AboutSection;
