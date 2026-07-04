"use client"

import { useActiveSection } from "./ActiveSectionContext"

const navItems = [
    {
        id: "about",
        name: "About",
        href: "#about",
    },
    {
        id: "experiences",
        name: "Experiences",
        href: "#experiences",
    },
    {
        id: "projects",
        name: "Projects",
        href: "#projects",
    },
    {
        id: "contact-me",
        name: "Contact Me",
        href: "#contact-me",
    },
]

const divTranslate = {
    "about": "lg:translate-x-6 md:translate-x-0",
    "experiences": "lg:translate-x-45.5 md:translate-x-30.5",
    "projects": "lg:translate-x-88 md:translate-x-63",
    "contact-me": "lg:translate-x-129 md:translate-x-94",
}

export default function Header() {
    const { activeSection, setActiveSection } = useActiveSection();
    return (
        <header className="sticky top-0 pt-16 pb-5 bg-black z-10">
            <div className="
                justify-between items-center box-border px-4 hidden 
                mx-auto 
                md:px-20 md:flex md:max-w-6xl
                lg:max-w-[1000px]
                xl:max-w-[1300px]
                "
            >
                <div className="text-4xl font-bold">{"<"}VS<span className="text-sky-300">/</span>{">"}</div>
                <nav className="relative">
                    <ul className="flex flex-row">
                        {
                            navItems.map((item) => {
                                return (
                                    <li key = {item?.id} onClick = {() => {setActiveSection(item.id)}} className={`
                                        hover:text-sky-300 transition-all 
                                        lg:mx-12
                                        md:mx-7
                                    `}>
                                        <a href = {item?.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={`absolute w-24 h-[2px] bg-sky-300 ${divTranslate[activeSection]} transition-all`}></div>
                </nav>
            </div>
        </header>
    )
}