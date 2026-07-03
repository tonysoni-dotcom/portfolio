import { LogoCss3, LogoHtml5, LogoJavascript, LogoReact } from "react-ionicons"
import Carousel from "./Carousel"

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

export default function AboutSection() {
    return (
        <main>
            <div className="w-screen md:max-w-5xl md:mx-auto px-3 flex flex-col-reverse md:flex-row justify-center items-center gap-5 md:gap-10 lg:gap-50 md:mt-30 lg:mt-40 xl:mt-40 xl:gap-50">
                <div className="relative">
                    <div className="w-55 h-55 md:w-75 md:h-75 border-4 border-sky-300 border-l-sky-400 border-r-sky-200 flex justify-center items-center">
                        <img src = {"/laptop.gif"} className="w-40 h-40 md:w-50 md:h-50"/>
                    </div>
                    <div className="absolute text-3xl w-15 h-15 -right-7.5 -bottom-7.5 md:text-7xl md:w-30 md:h-20 md:-right-15 md:-bottom-10 font-bold bg-black flex justify-center items-center">
                        {"</>"}
                    </div>
                </div>
                <div className="mb-20 md:mb-0">
                    <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Vishnu<span className="text-sky-300">.</span></h1>
                    <h1 className="text-4xl md:text-6xl font-bold mb-5">
                        {
                            "Frontend Dev".split("").map((char, index) => {
                                return (
                                    <span key = {index} className={colorClasses[index]}>{char}</span>
                                )
                            })
                        }
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
            </div>
            <Carousel/>
            <div className="text-4xl flex justify-center items-center mt-20 font-bold">
                <span>About</span><span className="text-sky-300">.</span>
            </div>
            <div className="flex justify-center items-center lg:gap-40 mt-10 lg:mt-20">
                <div className="hidden lg:flex w-50 h-50 lg:w-80 lg:h-80 flex justify-center items-center">
                    <img src = {"/stone_henge.gif"} className="w-50 h-50"/>
                </div>
                <div className="hidden lg:flex w-15 h-90 bg-gray-900 -skew-x-10"></div>
                <div className="px-10 lg:w-100 mb-10">I'm a <span className="text-sky-300">frontend engineer</span> with 3.5 years building product UIs at Capgemini - across regulatory tech, wealth management, and AI-driven advertising for clients like HSBC. Outside of full-time work, I'm the solo developer on Superserious, a community + AI assistant mobile app shipped on the App Store. I care most about the parts of frontend that don't look easy - performance, complex state, AI-native interfaces.</div>
            </div>
        </main>
    )
}