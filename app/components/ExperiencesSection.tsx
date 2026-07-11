import Image from "next/image"
import React from "react"
import AttachRef from "./AttachRef"

type Experience = {
    startDate: string,
    endDate: string,
    companyName: string,
    jobDescription: string
    img: string,
}

const experiences:Experience[] = [
    {
        startDate: "04-Oct-2022",
        endDate: "Current",
        companyName: "Capgemini",
        jobDescription: "I'm a frontend engineer with 3.5 years building product UIs at Capgemini - across regulatory tech, wealth management, and AI-driven advertising for clients like HSBC. Outside of full-time work, I'm the solo developer on Superserious, a community + AI assistant mobile app shipped on the App Store. I care most about the parts of frontend that don't look easy - performance, complex state, AI-native interfaces.",
        img: "/capgemini.png"
    }
]

export default function ExperiencesSection() {
    return (
        <AttachRef name = "experiences">
            <section id = "experiences" className="scroll-mt-40">
                <h2 className="text-4xl flex justify-center items-center mt-10 md:mt-20 font-bold">
                    <span>Experiences</span><span className="text-sky-300">.</span>
                </h2>
                <div>
                    {
                        experiences?.map((exp, ind) => {
                            return (
                                <ExperienceItem exp = {exp} key = {ind}/>
                            )
                        })
                    }
                </div>
            </section>
        </AttachRef>
    )
}

function ExperienceItem({exp} : {exp:Experience}): React.ReactElement{
    return (
        <div>
            <div className="
                flex flex-col px-10 mt-10 md:hidden
            ">
                <div className="
                    flex flex-row gap-5 items-center
                ">
                    <Image
                        src = {exp?.img}
                        width = {35}
                        height = {20}
                        alt = {"project_image"}
                    />
                    <div className="flex flex-col">
                        <span className="text-sky-300 font-semibold text-2xl">{exp.companyName}</span>
                        <span className="text-teal-300 font-semibold text-xs">{exp.startDate} - {exp.endDate}</span>
                    </div>
                </div>
                <p className="
                    mt-5
                ">
                    {exp.jobDescription}
                </p>
            </div>
            <div className="hidden md:flex flex-row justify-center items-start mt-10 gap-3 max-w-7xl mx-auto">
                <div className="flex flex-col gap-5 items-center justify-center">
                    <span className="text-teal-300 font-semibold text-md leading-8">{exp.startDate} - {exp.endDate}</span>
                    <div className="box-border">
                        <Image
                            src = {exp?.img}
                            width = {90}
                            height = {35}
                            alt = {"project_image"}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-[60%]">
                    <span className="text-sky-300 font-semibold text-2xl">{exp.companyName}</span>
                    <p className="text-lg">
                        {exp.jobDescription}
                    </p>
                </div>
            </div>
        </div>
    )
}