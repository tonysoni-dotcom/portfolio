import Link from "next/link";
import { projects } from "./projectsData";
import ProjectCard from "./projects/_Components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center pt-20 bg-black">
      <div className="px-6 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Vishnu Soni
        </h1>
        <p className="text-xl text-zinc-300 mb-2">
          Frontend engineer building product experiences.
        </p>
        <p className="text-zinc-400 mb-8 max-w-5xl mx-auto">
          I'm a frontend engineer with 3.5 years building product UIs at Capgemini — across regulatory tech, wealth management, and AI-driven advertising for clients like HSBC. Outside of full-time work, I'm the solo developer on Superserious, a community + AI assistant mobile app shipped on the App Store. I care most about the parts of frontend that don't look easy — performance, complex state, AI-native interfaces.
        </p>
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 gap-y-5 p-5 max-w-450 mx-auto mb-2">
            {
                projects.slice(0,3).map((project) => {
                    return <ProjectCard key = {project.id} name = {project.name} description={project.description}/>
                })
            }
        </div>
        <Link href = "/projects" className="inline-block mb-10 px-3 py-1 text-zinc-400 hover:text-white underline">
            View All Projects
        </Link>
        <h2 className="text-2xl mb-3 font-bold text-white">Contact Me</h2>
        <div className="flex gap-6 justify-center text-zinc-400 mb-5">
          <a href="https://github.com/tonysoni-dotcom" className="hover:text-white underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/vishnu-soni-work" className="hover:text-white underline">
            LinkedIn
          </a>
          <a href="mailto:vishnu.soni.work@gmail.com" className="hover:text-white underline">
            Email
          </a>
        </div>
      </div>
    </main>
  );
}