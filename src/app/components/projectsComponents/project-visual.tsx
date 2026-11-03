import { projectIndex, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PointerPlate from "./pointer-plate";

interface ProjectVisualProps {
    project: Project
    className?: string
    /** Prévia grande da página de detalhes: imagem com prioridade e mais resolução. */
    priority?: boolean
}

/** Desloca a camada conforme o ponteiro; `depth` em px no extremo. */
const depth = (px: number) => ({
    transform: `translate3d(calc(var(--px) * ${px}px), calc(var(--py) * ${px}px), 0)`,
})

const hostname = (url?: string | null) => (url ? new URL(url).hostname : "localhost")

/**
 * A prévia de cada projeto: uma placa com a grade da página ao fundo, um halo
 * na cor do projeto e o artefato principal: app, site, código ou diagrama.
 */
const ProjectVisual = ({ project, className, priority = false }: ProjectVisualProps) => {
    return (
        <PointerPlate
         className={cn("group/plate relative isolate overflow-hidden bg-surface", className)}
        >
            <div
             aria-hidden="true"
             className="absolute inset-0 -z-10 opacity-60 [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]
                        [background-size:2.5rem_2.5rem] [background-position:-1px_-1px]"
            />
            <div
             aria-hidden="true"
             className="absolute inset-0 -z-10 opacity-25 transition-opacity duration-700 group-hover/plate:opacity-40"
             style={{ background: `radial-gradient(60% 55% at 50% 100%, ${project.tone}, transparent 70%)` }}
            />

            <span aria-hidden="true" className="meta absolute left-4 top-4 text-muted-foreground sm:left-5 sm:top-5">
                {projectIndex(project)} / {project.category}
            </span>
            <span
             aria-hidden="true"
             className="absolute right-4 top-4 size-2 sm:right-5 sm:top-5"
             style={{ background: project.tone }}
            />

            <div
             className="absolute inset-0 flex items-end justify-center px-[8%] pt-14 transition-transform duration-700 ease-out-expo"
             style={depth(-10)}
            >
                <Artifact project={project} priority={priority} />
            </div>
        </PointerPlate>
    );
}

const Artifact = ({ project, priority }: { project: Project, priority: boolean }) => {
    const alt = `Captura de tela do projeto ${project.name}`

    switch (project.visual) {
        case 'phone':
            return (
                <div
                 className="relative aspect-[9/19.5] h-[88%] translate-y-[8%] overflow-hidden rounded-[2rem] border-[6px] border-[#1c1c1f]
                            bg-black shadow-[0_30px_80px_-20px_rgb(0_0_0/0.6)] transition-transform duration-700 ease-out-expo
                            group-hover/plate:translate-y-[3%]"
                >
                    {project.image && (
                        <Image
                         src={project.image}
                         alt={alt}
                         fill
                         priority={priority}
                         sizes="(min-width: 1024px) 320px, 50vw"
                         className="object-cover object-top"
                        />
                    )}
                </div>
            )
        case 'kiosk':
            // Totem de autoatendimento: tela em retrato no corpo do equipamento,
            // com impressora e leitor de cartão; a base sai pela borda da placa.
            return (
                <div
                 className="flex h-[96%] translate-y-[6%] flex-col items-center rounded-t-[1.25rem] bg-[#1c1c1f]
                            shadow-[0_30px_80px_-20px_rgb(0_0_0/0.6)] transition-transform duration-700 ease-out-expo
                            group-hover/plate:translate-y-[2%]"
                 style={{ aspectRatio: '10 / 21' }}
                >
                    <span aria-hidden="true" className="my-[4%] size-1.5 shrink-0 rounded-full bg-[#3a3a3f]" />
                    <div className="relative w-[90%] shrink-0 overflow-hidden rounded-[3px] bg-white" style={{ aspectRatio: '860 / 1640' }}>
                        {project.image && (
                            <Image
                             src={project.image}
                             alt={alt}
                             fill
                             priority={priority}
                             sizes="(min-width: 1024px) 280px, 45vw"
                             className="object-cover object-top"
                            />
                        )}
                    </div>
                    <span aria-hidden="true" className="mt-[8%] h-[3px] w-2/5 shrink-0 rounded-full bg-black/70" />
                    <span aria-hidden="true" className="mt-[6%] aspect-[4/3] w-1/4 shrink-0 rounded-[3px] border border-[#3a3a3f]" />
                </div>
            )
        case 'browser':
        case 'code':
            return (
                <div
                 className="relative w-full max-w-[38rem] translate-y-[2px] overflow-hidden rounded-t-md border border-b-0 border-border-strong
                            bg-elevated shadow-[0_-20px_60px_-25px_rgb(0_0_0/0.5)] transition-transform duration-700 ease-out-expo
                            group-hover/plate:-translate-y-2"
                >
                    <div className="flex h-8 items-center gap-3 border-b border-border px-3" aria-hidden="true">
                        <span className="flex gap-1.5">
                            <span className="size-2 rounded-full bg-border-strong" />
                            <span className="size-2 rounded-full bg-border-strong" />
                            <span className="size-2 rounded-full bg-border-strong" />
                        </span>
                        <span className="meta truncate normal-case tracking-normal text-muted-foreground">
                            {project.visual === 'code' ? `${project.slug}/src` : hostname(project.liveUrl)}
                        </span>
                    </div>
                    <div className={cn("relative overflow-hidden", project.visual === 'code' ? "aspect-[16/10] bg-[#1e1e1e]" : "aspect-[16/11] bg-white")}>
                        {project.image && (
                            <Image
                             src={project.image}
                             alt={alt}
                             fill
                             priority={priority}
                             sizes="(min-width: 1024px) 600px, 90vw"
                             className="object-cover object-left-top transition-transform duration-1000 ease-out-expo group-hover/plate:scale-[1.03]"
                            />
                        )}
                    </div>
                </div>
            )
        case 'graph':
            return <OrchestrationGraph tone={project.tone} />
    }
}

const surfaces = ['Web', 'Desktop', 'Mobile']
const providers = ['OpenAI', 'Anthropic', 'Google', 'xAI', 'Local']

/**
 * Diagrama da arquitetura do N.E.R.O.: superfícies entram pelo gateway, a
 * camada de orquestração decide e roteia cada etapa para um provedor.
 */
const OrchestrationGraph = ({ tone }: { tone: string }) => {
    const providerY = (i: number) => 70 + i * 64
    const surfaceY = (i: number) => 134 + i * 64

    return (
        <svg
         viewBox="0 0 600 400"
         role="img"
         aria-label="Diagrama: superfícies web, desktop e mobile passam pelo núcleo N.E.R.O., que roteia cada etapa para OpenAI, Anthropic, Google, xAI ou um modelo local."
         className="mb-[6%] h-[82%] w-full max-w-[40rem] self-center font-mono text-foreground"
        >
            <g fill="none" stroke="currentColor" strokeOpacity="0.28">
                {surfaces.map((_, i) => (
                    <path key={i} d={`M120 ${surfaceY(i)} H170 V200 H230`} />
                ))}
                {providers.map((_, i) => (
                    <path key={i} d={`M370 200 H420 V${providerY(i)} H470`} />
                ))}
            </g>

            {/* Fluxo: um traço em movimento indica a rota ativa. */}
            <g fill="none" stroke={tone} strokeWidth="1.5" className="flow">
                <path d={`M120 ${surfaceY(0)} H170 V200 H230`} />
                <path d={`M370 200 H420 V${providerY(1)} H470`} />
            </g>

            {surfaces.map((label, i) => (
                <g key={label}>
                    <rect x="20" y={surfaceY(i) - 16} width="100" height="32" fill="var(--elevated)" stroke="currentColor" strokeOpacity="0.2" />
                    <text x="34" y={surfaceY(i) + 4} fontSize="11" letterSpacing="1" fill="currentColor" fillOpacity="0.7">{label.toUpperCase()}</text>
                </g>
            ))}

            <rect x="230" y="150" width="140" height="100" fill="var(--background)" stroke={tone} />
            <rect x="226" y="146" width="8" height="8" fill={tone} />
            <rect x="366" y="246" width="8" height="8" fill={tone} />
            <text x="300" y="196" textAnchor="middle" fontSize="16" fontWeight="600" letterSpacing="2" fill="currentColor">N.E.R.O.</text>
            <text x="300" y="218" textAnchor="middle" fontSize="9" letterSpacing="1.5" fill="currentColor" fillOpacity="0.55">ORQUESTRAÇÃO</text>

            {providers.map((label, i) => (
                <g key={label}>
                    <rect
                     x="470" y={providerY(i) - 16} width="110" height="32"
                     fill="var(--elevated)"
                     stroke={i === 1 ? tone : "currentColor"}
                     strokeOpacity={i === 1 ? 1 : 0.2}
                    />
                    <text x="484" y={providerY(i) + 4} fontSize="11" letterSpacing="1" fill="currentColor" fillOpacity={i === 1 ? 1 : 0.7}>
                        {label.toUpperCase()}
                    </text>
                </g>
            ))}
        </svg>
    )
}

export default ProjectVisual;
