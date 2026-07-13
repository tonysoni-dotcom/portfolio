"use client"

import { useEffect, useRef } from "react";

// just gonna use for click for now, add more event types when needed
type EventTypes = "click" | "mouseover";

export default function useEventListener<T>(type: EventTypes, callback: (e: MouseEvent | KeyboardEvent,) => void,ref?: any ):void {
    const callbackRef = useRef<(e: MouseEvent | KeyboardEvent) => void>(callback);
    useEffect(()=> {callbackRef.current = callback});
    useEffect(() => {
        let hostNode = ref && ref.current? ref.current : window;
        if(!callbackRef.current) return;
        let wrapperFunc = (e) => callbackRef.current(e);
        hostNode.addEventListener(type, wrapperFunc);

        return () => {
            hostNode.removeEventListener(type, wrapperFunc);
        }
    }, [type,ref])
}