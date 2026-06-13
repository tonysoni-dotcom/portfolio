import { projects, type Project } from "../projectsData";
import ProjectCard from "./_Components/ProjectCard";
export default function Page() {
    return (
        <main className="bg-black min-h-screen p-5">
            <h1 className="text-5xl text-center mt-5 text-white">Projects</h1>
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-5 max-w-450 mx-auto">
                {
                    projects.map((project: Project) => {
                        return <ProjectCard key = {project.id} name = {project.name} description={project.description}/>
                    })
                }
            </div>
        </main>
    )
}