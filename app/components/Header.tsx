"use client"

import { useState } from "react";
import { useActiveSection } from "./ActiveSectionContext"

const navItems = [
    {
        id: 1,
        name: "About",
        href: "#about",
    },
    {
        id: 2,
        name: "Experiences",
        href: "#experiences",
    },
    {
        id: 3,
        name: "Projects",
        href: "#projects",
    },
    {
        id: 4,
        name: "Contact Me",
        href: "#contact-me",
    },
]

const divTranslate = {
    1: "lg:translate-x-6 md:translate-x-0",
    2: "lg:translate-x-45.5 md:translate-x-30.5",
    3: "lg:translate-x-88 md:translate-x-63",
    4: "lg:translate-x-129 md:translate-x-94",
}

export default function Header() {
    const { activeSection, setActiveSection } = useActiveSection();
    return (
        <header className="sticky top-0 pt-16 pb-5 bg-black z-10">
            <div className="
                flex justify-between align-center w-screen box-border px-4 hidden 
                mx-auto 
                md:px-20 md:flex md:max-w-6xl
                lg:max-w-[1000px]
                xl:max-w-[1300px]
                "
            >
                <div className="text-4xl font-bold">{"<"}VS<span className="text-sky-300">/</span>{">"}</div>
                <nav className="relative">
                    {
                        navItems.map((item) => {
                            return (
                                <a key = {item?.id} onClick = {() => {setActiveSection(item.id)}} href = {item?.href} className={`
                                    hover:text-sky-300 transition-all 
                                    lg:mx-12
                                    md:mx-7
                                `}>
                                    <span>{item.name}</span>
                                </a>
                            )
                        })
                    }
                    <div className={`absolute w-24 h-[2px] bg-sky-300 ${divTranslate[activeSection]} transition-all`}></div>
                </nav>
            </div>
        </header>
    )
}