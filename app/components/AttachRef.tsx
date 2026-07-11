"use client"

import React, { useEffect, useRef } from "react"
import useIntersection from "./useIntersection";

export default function AttachRef({children, name} : {children: React.ReactElement, name:string}) {
    const ref = useRef<null | HTMLDivElement>(null);
    const {addRef, removeRef} = useIntersection();
    useEffect(() => {
        addRef(name, ref);

        return () => {
            removeRef(name);
        }
    }, [name])
    return (
        <div ref = {ref}>
            {children}
        </div>
    )
}