type Props = {name: string, description: string}

export default function ProjectCard({name, description}: Props) {
    return (
        <div className="bg-zinc-700 text-black p-4 rounded-xl mx-auto max-w-[25rem] hover:scale-103 transition-transform cursor-pointer">
            <div className="text-2xl font-bold text-center mb-3 text-gray-200">{name}</div>
            <div className="text-base text-center text-gray-400">{description}</div>
        </div>
    )
}