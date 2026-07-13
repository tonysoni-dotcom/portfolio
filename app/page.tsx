"use client"

import { useRef, useState } from "react";
import usePrevious from "./components/usePrevious";
import useEventListener from "./components/useEventListener";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const previous = usePrevious<number>(count);
  console.log(previous);

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  useEventListener("click", () => {setCount(count-1)}, prevRef)
  useEventListener("click", () => {setCount(count+1)}, nextRef)
  
  return (
    <main className="w-full min-h-screen flex justify-center items-center gap-2">
      <span>Previous value : {previous}</span>
      <button ref = {prevRef} className="w-10 h-10 border-[1px] rounded-full border-gray-500 text-2xl">-</button>
      <span className="w-10 h-10 flex justify-center items-center">{count}</span>
      <button ref = {nextRef} className="w-10 h-10 border-[1px] rounded-full border-gray-500 text-2xl">+</button>
    </main>
  );
}