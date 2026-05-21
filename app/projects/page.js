import ProjectCard from "./_Components/ProjectCard";

const projects = [
    {
        id: 1,
        name: "RegLens",
        description: "Internal product piloted with HSBC to help enterprises track regulations and report compliance data (e.g., CO₂ emissions) to regulatory bodies."
    },
    {
        id: 2,
        name: "Aura", 
        description: "Portfolio management application with integrated AI wealth-advisor assistant."
    },
    {
        id: 3,
        name: "MarTech", 
        description: "An AI-driven advertising platform that generates compliance-reviewed banner ads."
    },
    {
        id: 4,
        name: "Superserious",
        description: "A cross-platform mobile application with content sharing, AI assistance, and community features; submitted to the Apple App Store."
    }
]

export default function Page() {
    return (
        <main className="bg-black min-h-screen">
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-10 max-w-450 mx-auto">
                {
                    projects.map((project, index) => {
                        return <ProjectCard key = {project.id} name = {project.name} description={project.description}/>
                    })
                }
            </div>
        </main>
    )
}