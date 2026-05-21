export default function ProjectCard({name, description}) {
    return (
        <div className="bg-white text-black p-4 rounded-lg mx-auto max-w-[25rem] hover:scale-102 transition-transform">
            <div className="text-xl font-bold text-center">{name}</div>
            <div className="text-base text-center">{description}</div>
        </div>
    )
}