export default function ProjectCard({name, description}) {
    return (
        <div className="bg-zinc-100 text-black p-4 rounded-xl mx-auto max-w-[25rem] hover:translate-y-[-0.2rem] transition-transform cursor-pointer hover:bg-white">
            <div className="text-3xl font-bold text-center mb-3">{name}</div>
            <div className="text-base text-center">{description}</div>
        </div>
    )
}