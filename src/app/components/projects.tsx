import ProjectCard from "./projectsComponents/project-card";

const ProjectsSection = () => {
    return ( 
        <div id="projects" className="min-h-screen w-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-3xl text-center mb-10">Meus <span className="text-green-600">projetos</span></h1>
            <div className="flex justify-center">
                <div className="px-5 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <ProjectCard project="cafeteria"/>
                    <ProjectCard project="orderService" />
                    <ProjectCard project="selfCheckout" />
                </div>
            </div>
        </div>
     );
}
 
export default ProjectsSection;