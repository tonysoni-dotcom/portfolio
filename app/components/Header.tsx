"use client"

import { ReorderThree } from "react-ionicons";
import { useActiveSection } from "./ActiveSectionContext"
import { useEffect, useRef, useState } from "react";
import useIntersection from "./useIntersection";

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
    "hero": "lg:translate-x-6 md:translate-x-0",
    "about": "lg:translate-x-6 md:translate-x-0",
    "experiences": "lg:translate-x-45.5 md:translate-x-30.5",
    "projects": "lg:translate-x-88 md:translate-x-63",
    "contact-me": "lg:translate-x-129 md:translate-x-94",
}

export default function Header() {
    const { activeSection, setActiveSection } = useActiveSection();
    const [mobileHeaderShown, setMobileHeaderShown] = useState<boolean>(false);
    const burgerRef = useRef<HTMLButtonElement | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const {entry} : {entry:string} = useIntersection();
    useEffect(() => {
        setActiveSection(entry)
    }, [entry])
    useEffect(() => {
        const listener: any = window.addEventListener("click", (e: MouseEvent) => {
            if(!burgerRef.current?.contains(e.target as Node) && !dropdownRef.current?.contains(e.target as Node)){
                setMobileHeaderShown(false);
            }
        })

        return () => {
            window.removeEventListener('click', listener);
        }
    }, [])
    return (
        <header className="sticky top-0 md:pt-12 md:pb-5 bg-black z-10">
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
            <div className="md:hidden relative py-5 mb-5 box-border w-full px-5 flex flex-row justify-between items-center">
                <div className="text-2xl font-bold">{"<"}VS<span className="text-sky-300">/</span>{">"}</div>
                <button onClick={() => {setMobileHeaderShown(!mobileHeaderShown)}} ref = {burgerRef}>
                    <ReorderThree
                        color = "white"
                        width = "30px"
                        height = "30px"
                    />
                </button>
                <div className={`${mobileHeaderShown? "flex" : "hidden"} absolute w-40 bg-zinc-900 top-[70%] right-5 p-3`} ref = {dropdownRef}>
                    <ul className="flex flex-col">
                        {
                            navItems.map((item) => {
                                return (
                                    <li key = {item?.id} onClick = {() => {setActiveSection(item.id)}} className={`
                                        hover:text-sky-300 transition-all 
                                        lg:mx-12
                                        md:mx-7
                                        ${activeSection == item?.id ? "text-sky-300" : ""}
                                    `}>
                                        <a href = {item?.href}>
                                            {item.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}