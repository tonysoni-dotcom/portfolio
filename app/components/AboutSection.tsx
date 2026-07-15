import Image from "next/image"
import Carousel from "./Carousel"
import AttachRef from "./AttachRef"

export default function AboutSection() {
    return (
        <AttachRef name = "about">
            <section id="about" className="scroll-mt-35">
                <h2 className="text-4xl flex justify-center items-center mt-15 md:mt-20 font-bold">
                    <span>About</span><span className="text-sky-300">.</span>
                </h2>
                <div className="flex justify-center items-center lg:gap-20 mt-10 lg:mt-20">
                    <div className="hidden lg:flex w-50 h-50 lg:w-80 lg:h-80 flex justify-center items-center">
                        <Image src = {"/stone_henge.gif"} alt = {"stone_henge.gif"} width = {200} height = {200}/>
                    </div>
                    <div className="hidden lg:flex w-15 h-90 bg-gray-900 -skew-x-15"></div>
                    <div className="px-10 lg:w-100 mb-10 md:text-lg">I'm a <span className="text-sky-300">frontend engineer</span> with 3.5 years building product UIs at Capgemini - across regulatory tech, wealth management, and AI-driven advertising for clients like HSBC. Outside of full-time work, I'm the solo developer on Superserious, a community + AI assistant mobile app shipped on the App Store. I care most about the parts of frontend that don't look easy - performance, complex state, AI-native interfaces.</div>
                </div>
            </section>
        </AttachRef>
    )
}