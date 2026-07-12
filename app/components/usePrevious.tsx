"use client"

import { useEffect, useRef } from "react";

export default function usePrevious<T>(currVal: T) {
    const ref = useRef<T | undefined>(undefined);
    useEffect(() => {
        ref.current = currVal;
    })
    return ref.current;
}