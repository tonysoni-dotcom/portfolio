"use client"

import { useCallback, useRef } from "react";
import useOnClickOutside from "./components/useOnClickOutside";

export default function Home() {

  const ref = useRef<HTMLDivElement | null>(null);

  let callback = useCallback(() => {
    console.log('clicked outside')
  }, []);

  useOnClickOutside(ref, callback);
  return (
    <main className="w-full min-h-screen flex justify-center items-center">
      <div className="w-20 h-20 bg-white" ref = {ref}></div>
    </main>
  );
}