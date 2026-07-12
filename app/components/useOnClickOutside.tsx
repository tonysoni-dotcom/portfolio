"use client"

import { RefObject, useEffect, useRef } from "react"

/*
use on click outside custom hook
accepts ref and a callback function, attaches a click listener on the document, returns void.
*/

export default function useOnClickOutside<T extends (HTMLDivElement)>(ref: RefObject<T>, callback: (e: MouseEvent) => void): void {
    const callbackRef = useRef<(e: MouseEvent) => void>(callback);

    useEffect(() => {callbackRef.current = callback});
    useEffect(() => {
        if(!ref || !ref.current || !callbackRef.current) return;
        const functionWrapper = (e: MouseEvent) => {
            if(!ref.current) return;
            if(!ref.current.contains(e.target as Node)){
                callbackRef.current(e);
            }
        }
        document.addEventListener('click', functionWrapper);

        return () => {
            document.removeEventListener("click", functionWrapper);
        }

    }, [ref])
}