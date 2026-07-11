"use client"

import React, { useContext, useEffect, useState } from "react"
import { IntersectionContext } from "./IntersectionProvider"

export default function useIntersection(): {addRef:(name: string, ref:  React.RefObject<HTMLDivElement>) => void, removeRef: (name: string) => void, entry: string} {
    const {refs, setRefs} = useContext(IntersectionContext);
    const [entry, setEntry] = useState<string | null>(null)
    useEffect(() => {
        const callback = (entries: any) => {
            let smallestDistance:number = Infinity;
            let smallestRefKey = null;
            Object.keys(refs).forEach((refKey) => {
                const ref = refs[refKey];
                const ele = ref.current;
                if(!ele) return;
                const rect = ele.getBoundingClientRect();
                if(!rect) return;
                let distanceFromCenter = Math.abs(rect.top + rect.height/2 - window.innerHeight/2);
                if(distanceFromCenter < smallestDistance) {
                    smallestDistance = distanceFromCenter;
                    smallestRefKey = refKey;
                }
            })
            // console.log(smallestRef.current, "smallest ref")
            setEntry(smallestRefKey);
        }
        const observer = new IntersectionObserver(callback, {threshold: [0,0.25,0.5,0.75,1]});

        Object.keys(refs).forEach((refKey) => {
            observer.observe(refs[refKey].current)
        })

        return () => {
            observer.disconnect();
        }
    }, [refs])

    return {
        addRef: (name: string, ref: React.RefObject<HTMLDivElement>) => {
            setRefs((curr) => {
                let newRef = {...curr};
                newRef[name] = ref;
                return newRef;
            })
        },
        removeRef: (name: string) => {
            setRefs((curr) => {
                const newRef = {...curr};
                delete newRef[name];
                return newRef;
            })
        },
        entry: entry
    }
}