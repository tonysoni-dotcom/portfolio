"use client"

import React, { useEffect, useState } from "react"

export default function Counter() {
    const [count, setCount] = useState<number>(0);
    const [localFetched, setLocalFetched] = useState<boolean>(false);

    useEffect(():void => {
        if(localFetched) {
            localStorage.setItem("count", count.toString())
            console.log('count set to : ', count)
        }
    }, [count])
    
    useEffect(() => {
        let localCount = localStorage.getItem("count");
        console.log(localCount, 'localCount')
        if(localCount) {
            setCount(Number(localCount))
        }
        setLocalFetched(true);
    }, [])
    return (
        <main className="flex justify-center items-center min-h-screen flex-col">
            <h1 className="text-4xl mb-20">This is a counter</h1>
            <div className="flex justify-center items-center">
                <button className="text-4xl rounded-full border-1 border-zinc-400 text-zinc-400 aspect-[1/1] w-13 flex justify-center items-center cursor-pointer mx-10 hover:border-white hover:text-white" onClick={(e:React.MouseEvent) => {setCount(count-1)}}>-</button>
                <div className="text-4xl">{count}</div>
                <button className="text-4xl rounded-full border-1 border-zinc-400 text-zinc-400 aspect-[1/1] w-13 flex justify-center items-center cursor-pointer mx-10 hover:border-white hover:text-white" onClick={(e: React.MouseEvent)=>{setCount(count+1)}}>+</button>
            </div>
        </main>
    )
}