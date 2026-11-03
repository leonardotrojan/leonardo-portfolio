import { projects } from "@/data/projects";
import CaseStudy from "./projectsComponents/case-study";
import ProjectIndex from "./projectsComponents/project-index";
import Reveal from "./shared/reveal";
import SectionHeader from "./shared/section-header";

const ProjectsSection = () => {

    const featured = projects.filter((project) => project.featured)
    const others = projects.filter((project) => !project.featured)

    return (
        <section id="work" aria-labelledby="work-title" className="section-y scroll-mt-16">
            <div className="container-page">
                <SectionHeader
                 id="work-title"
                 index="01"
                 label="Trabalho selecionado"
                 title="Ideias que viraram software."
                 description="Do marketplace em produção à plataforma de IA em construção: cada projeto começa num problema e termina em algo que funciona."
                />

                <div className="mt-20 space-y-24 md:mt-28 md:space-y-36">
                    {featured.map((project, i) => (
                        <CaseStudy key={project.slug} project={project} flip={i % 2 === 1} />
                    ))}
                </div>

                <div className="mt-28 grid-page md:mt-40">
                    <Reveal className="col-span-4 md:col-span-3">
                        <h3 className="meta text-muted-foreground">
                            <span className="text-signal-ink">(+)</span> Também construído
                        </h3>
                    </Reveal>
                    <Reveal delay={100} className="col-span-4 mt-6 md:col-span-9 md:mt-0">
                        <ProjectIndex projects={others} />
                    </Reveal>
                </div>
            </div>
        </section>
     );
}

export default ProjectsSection;
