"use client"

import { useEffect, useRef, useState } from "react"

export default function Debounce() {
    const [input, setInput] = useState<string>("")
    const debouncedInput = useDebounce(input, 500);
    return (
        <main className="min-h-screen bg-black flex justify-center items-center flex-col">
            <input 
                value={input} 
                onChange={e => setInput(e.target.value)}
                placeholder="Type here..."
                className="border-1 rounded-md"
            />
            <p>Immediate: {input}</p>
            <p>Debounced (500ms): {debouncedInput}</p>
        </main>
    )
}

function useDebounce<T>(input :T, delay: number): T {
    const [updatedValue, setUpdatedValue] = useState<T>(input);
    useEffect(() => {
        const timer = setTimeout(() => {
            setUpdatedValue(input);
        }, delay);

        return () => {
            clearTimeout(timer)
        }
    }, [input, delay])
    return updatedValue;
}