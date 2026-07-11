"use client"

import { createContext, useState } from "react"

export const IntersectionContext = createContext<any>(null);

export const IntersectionProvider = ({children}) => {
    const [refs, setRefs] = useState<object>({});

    return (
        <IntersectionContext.Provider value = {{refs, setRefs}}>
            {children}
        </IntersectionContext.Provider>
    )
}