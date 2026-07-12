"use client"

import { useState } from "react";
import usePrevious from "./components/usePrevious";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const previous = usePrevious<number>(count);
  console.log(previous)
  return (
    <main className="w-full min-h-screen flex justify-center items-center gap-2">
      <span>Previous value : {previous}</span>
      <button onClick={()=>{setCount(count-1)}} className="w-10 h-10 border-[1px] rounded-full border-gray-500 text-2xl">-</button>
      <span className="w-10 h-10 flex justify-center items-center">{count}</span>
      <button onClick={()=>{setCount(count+1)}} className="w-10 h-10 border-[1px] rounded-full border-gray-500 text-2xl">+</button>
    </main>
  );
}