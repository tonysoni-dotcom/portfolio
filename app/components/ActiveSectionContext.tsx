"use client"

import { createContext, ReactNode, useContext, useState } from "react";

type ActiveSectionContextType = {
    activeSection:string,
    setActiveSection:(section: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionProvider({children} : {children: ReactNode}) {
    const [activeSection, setActiveSection] = useState<string>("about");

    return (
        <ActiveSectionContext.Provider value = {{activeSection, setActiveSection}}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSection() {
    const context = useContext(ActiveSectionContext);
    if(!context) {
        throw new Error("useActiveSection must be used within ActiveSectionProvider");
    }
    return context;
}