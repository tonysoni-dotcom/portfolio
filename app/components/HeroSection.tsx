import Image from "next/image"
import { LogoCss3, LogoHtml5, LogoJavascript, LogoReact } from "react-ionicons"

const colorClasses = [
    "text-zinc-300",
    "text-zinc-300",
    "text-zinc-400",
    "text-zinc-400",
    "text-zinc-500",
    "text-zinc-500",
    "text-zinc-600",
    "text-zinc-600",
    "text-zinc-700",
    "text-zinc-700",
    "text-zinc-800",
    "text-zinc-800",
]


export default function HeroSection() {
    return (
        <section className="w-full md:max-w-5xl md:mx-auto px-3 flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-50 md:mt-30 lg:mt-40 xl:mt-40 xl:gap-50">
            <div className="relative">
                <div className="w-55 h-55 md:w-75 md:h-75 border-4 border-sky-300 border-l-sky-400 border-r-sky-200 flex justify-center items-center">
                    <Image src = {"/laptop.gif"} alt = "laptop.gif" width={40} height = {40} className="w-40 h-40 md:w-50 md:h-50"/>
                </div>
                <div className="absolute text-3xl w-15 h-10 -right-7.5 -bottom-5 md:text-7xl md:w-30 md:h-20 md:-right-15 md:-bottom-10 font-bold bg-black flex justify-center items-center">
                    {"</>"}
                </div>
            </div>
            <div className="mb-20 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Hi, I'm Vishnu<span className="text-sky-300">.</span>
                    <br/>
                    <span className="block mb-5">
                        {
                            "Frontend Dev".split("").map((char, index) => {
                                return (
                                    <span key = {index} className={colorClasses[index]}>{char}</span>
                                )
                            })
                        }
                    </span>
                </h1>
                <div className="flex gap-3">
                    <LogoReact
                        color={'white'} 
                        height="40px"
                    />
                    <LogoHtml5
                        color={'white'} 
                        height="40px"
                    />
                    <LogoCss3
                        color={'white'} 
                        height="40px"
                    />
                    <LogoJavascript
                        color={'white'} 
                        height="40px"
                    />
                </div>
            </div>
        </section>
    )
}