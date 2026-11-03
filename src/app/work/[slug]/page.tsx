import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { getProject, projectIndex, projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import Footer from "../../components/footer-section";
import NavBar from "../../components/navbar/nav-bar";
import ProjectVisual from "../../components/projectsComponents/project-visual";
import { cta } from "../../components/shared/cta";
import Reveal from "../../components/shared/reveal";
import SkipLink from "../../components/shared/skip-link";
import Words from "../../components/shared/words";

interface WorkPageProps {
    params: Promise<{ slug: string }>
}

export const dynamicParams = false

/** Nomes longos (uma palavra só, em caixa alta) precisam de uma escala menor para caber no mobile. */
const isLong = (name: string) => name.length > 10

export function generateStaticParams() {
    return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
    const project = getProject((await params).slug)
    if (!project) return {}

    return {
        title: project.name,
        description: project.description,
        alternates: { canonical: `/work/${project.slug}` },
        openGraph: {
            title: `${project.name} · Leonardo Trojan`,
            description: project.description,
            url: `/work/${project.slug}`,
            ...(project.image ? { images: [project.image] } : {}),
        },
    }
}

export default async function WorkPage({ params }: WorkPageProps) {
    const project = getProject((await params).slug)
    if (!project) notFound()

    const next = projects[(projects.indexOf(project) + 1) % projects.length]

    const facts = [
        { term: 'Papel', value: project.role },
        { term: 'Categoria', value: project.category },
        { term: 'Status', value: project.status },
    ]

    return (
        <>
            <SkipLink />
            <NavBar />
            <main id="content">
                <article aria-labelledby="project-title">
                    <header id="top" className="container-page pt-28 md:pt-36">
                        <div className="enter flex items-center justify-between border-b border-border pb-5">
                            <Link
                             href="/#work"
                             className="meta group inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
                            >
                                <ArrowLeft className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" aria-hidden="true" />
                                Trabalho
                            </Link>
                            <p className="meta text-muted-foreground">
                                <span className="text-signal-ink">({projectIndex(project)})</span> / {String(projects.length).padStart(2, '0')}
                            </p>
                        </div>

                        <h1
                         id="project-title"
                         className={cn(
                            "display mt-14 md:mt-20",
                            isLong(project.name)
                                ? "text-[clamp(2.25rem,9.5vw,3.5rem)] md:text-[clamp(4rem,8vw,9rem)]"
                                : "text-[clamp(3.25rem,15vw,6rem)] md:text-[clamp(6rem,12vw,13rem)]"
                         )}
                        >
                            <Words text={project.name} delay={100} />
                        </h1>

                        <div className="grid-page mt-12 gap-y-10 md:mt-16">
                            <p
                             className="enter col-span-4 text-pretty text-xl leading-snug tracking-tight md:col-span-6 md:text-2xl"
                             style={{ "--delay": "300ms" } as React.CSSProperties}
                            >
                                {project.description}
                            </p>
                            <dl
                             className="enter col-span-4 grid grid-cols-[6rem_1fr] gap-y-3 text-sm md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9"
                             style={{ "--delay": "400ms" } as React.CSSProperties}
                            >
                                {facts.map(({ term, value }) => (
                                    <div key={term} className="contents">
                                        <dt className="meta border-t border-border pt-3 text-muted-foreground">{term}</dt>
                                        <dd className="border-t border-border pt-2.5">{value}</dd>
                                    </div>
                                ))}
                                <dt className="meta border-t border-border pt-3 text-muted-foreground">Links</dt>
                                <dd className="flex flex-wrap gap-x-5 gap-y-1 border-t border-border pt-2.5">
                                    {project.liveUrl && (
                                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 hover:text-signal-ink">
                                            Ao vivo
                                            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                                            <span className="sr-only">(abre em nova aba)</span>
                                        </a>
                                    )}
                                    {project.repoUrl && (
                                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 hover:text-signal-ink">
                                            Código
                                            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                                            <span className="sr-only">(abre em nova aba)</span>
                                        </a>
                                    )}
                                    {!project.liveUrl && !project.repoUrl && (
                                        <span className="text-muted-foreground">Repositório privado</span>
                                    )}
                                </dd>
                            </dl>
                        </div>
                    </header>

                    <div className="container-page mt-16 md:mt-24">
                        <div className="enter" style={{ "--delay": "500ms" } as React.CSSProperties}>
                            <ProjectVisual project={project} priority className="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/8]" />
                        </div>
                    </div>

                    <div className="container-page section-y">
                        <section aria-labelledby="overview-title" className="grid-page gap-y-8 border-t border-border-strong pt-6">
                            <h2 id="overview-title" className="meta col-span-4 text-muted-foreground md:col-span-3">
                                <span className="text-signal-ink">(a)</span> Visão geral
                            </h2>
                            <Reveal className="col-span-4 md:col-span-9 lg:col-span-7">
                                <p className="text-pretty text-xl leading-relaxed tracking-tight md:text-2xl md:leading-relaxed">
                                    {project.projectDetails}
                                </p>
                            </Reveal>
                        </section>

                        {project.highlights && (
                            <section aria-labelledby="highlights-title" className="grid-page mt-24 gap-y-8 border-t border-border-strong pt-6 md:mt-32">
                                <h2 id="highlights-title" className="meta col-span-4 text-muted-foreground md:col-span-3">
                                    <span className="text-signal-ink">(b)</span> Destaques
                                </h2>
                                <ol className="col-span-4 md:col-span-9">
                                    {project.highlights.map((item, i) => (
                                        <li key={item}>
                                            <Reveal delay={i * 60} className="grid grid-cols-[3rem_1fr] border-b border-border py-6 md:grid-cols-[4rem_1fr]">
                                                <span className="meta pt-1.5 text-muted-foreground">0{i + 1}</span>
                                                <span className="text-lg leading-snug tracking-tight md:text-2xl">{item}</span>
                                            </Reveal>
                                        </li>
                                    ))}
                                </ol>
                            </section>
                        )}

                        <section aria-labelledby="stack-title" className="grid-page mt-24 gap-y-8 border-t border-border-strong pt-6 md:mt-32">
                            <h2 id="stack-title" className="meta col-span-4 text-muted-foreground md:col-span-3">
                                <span className="text-signal-ink">({project.highlights ? 'c' : 'b'})</span> Stack
                            </h2>
                            <Reveal className="col-span-4 md:col-span-9">
                                <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-4">
                                    {project.stack.map((tech) => (
                                        <li key={tech} className="border-b border-border py-4 text-lg tracking-tight">{tech}</li>
                                    ))}
                                </ul>
                            </Reveal>
                        </section>

                        {(project.liveUrl || project.repoUrl) && (
                            <Reveal className="mt-16 flex flex-wrap gap-3 md:mt-20 md:pl-[calc((100%+1.5rem)/12*3)]">
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={cta({ size: 'lg' })}>
                                        Ver ao vivo
                                        <ArrowUpRight className="group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                                        <span className="sr-only">(abre em nova aba)</span>
                                    </a>
                                )}
                                {project.repoUrl && (
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className={cta({ variant: 'secondary', size: 'lg' })}>
                                        <Github />
                                        Código-fonte
                                        <span className="sr-only">(abre em nova aba)</span>
                                    </a>
                                )}
                            </Reveal>
                        )}
                    </div>
                </article>

                <nav aria-label="Próximo projeto" className="border-t border-border">
                    <Link href={`/work/${next.slug}`} className="group container-page block py-16 md:py-24">
                        <span className="meta flex items-center justify-between text-muted-foreground">
                            <span>Próximo projeto</span>
                            <span>({projectIndex(next)})</span>
                        </span>
                        <span className="mt-8 flex items-end justify-between gap-6">
                            <span
                             className={cn(
                                "display transition-colors duration-500 group-hover:text-signal-ink",
                                isLong(next.name)
                                    ? "text-[clamp(2rem,8.5vw,3.5rem)] md:text-[clamp(3.5rem,7vw,8rem)]"
                                    : "text-[clamp(2.75rem,12vw,5rem)] md:text-[clamp(5rem,9vw,10rem)]"
                             )}
                            >
                                {next.name}
                            </span>
                            <ArrowRight
                             className="mb-[1.5vw] size-8 shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-2 md:size-14"
                             strokeWidth={1.25}
                             aria-hidden="true"
                            />
                        </span>
                    </Link>
                </nav>
            </main>
            <Footer />
        </>
    );
}
