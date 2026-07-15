const skills:string[] = [
    "Javascript",
    "Development",
    "Programming",
    "CSS",
    "GIT",
    "NextJS",
    "ReactJS",
    "TypeScript",
    "JSX",
]
export default function Carousel() {
    if (typeof window !== "undefined") {
        console.log(window.innerWidth, 'width');
    }
    return (
        <section className="w-full h-16 border-t-1 border-b-1 mt-25 md:mt-40 flex justify-center items-center overflow-hidden ">
            <ul className="flex items-center animate-marquee">
                {
                    // [...skills,...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills].map((skill, index) => {
                    [...skills, ...skills, ...skills, ...skills].map((skill, index) => {
                        return <li className="text-md md:text-xl" key = {index}>
                            <span className="mr-5 text-gray-400">{skill.toUpperCase()}</span>
                            <span className="mr-5 text-gray-400">/</span>
                        </li>
                    })
                }
            </ul>
        </section>
    )
}