"use client"

import { useCallback, useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <main className="min-h-[2000px]">
      <ScrollTracker/>
      <Test/>
    </main>
  );
}

function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);
  
  const throttledSetScroll = useThrottle((y) => setScrollY(y), 100);
  
  useEffect(() => {
    const handler = () => throttledSetScroll(window.scrollY);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [throttledSetScroll]);
  
  return <div className="sticky top-0">Scroll: {scrollY}</div>;
}

function Test() {
  const [count, setCount] = useState(0);
  
  const throttled = useThrottle(() => {
    console.log('Throttled fire, count is:', count);
  }, 1000);
  
  useEffect(() => {
    const interval = setInterval(() => throttled(), 100);
    return () => clearInterval(interval);
  }, [throttled]);
  
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}


// school b
function useThrottle(fn, delay) {
  let fnRef = useRef(fn);
  useEffect(() => {fnRef.current = fn}, [fn]);
  const lastCallTime = useRef(0);
  return useCallback((...props)=>{
    // console.log(Date.now());
    if(Date.now() - lastCallTime.current > delay) {
      lastCallTime.current = Date.now();
      return fnRef.current(...props);
    }else{
    }
  }, [delay]);
}


// school a
// function useThrottle(fn, delay) {
//   const lastCalledTime = useRef(0);
//   const retFunction = useCallback((...props) => {
//     if(Date.now() - lastCalledTime.current > delay) {
//       lastCalledTime.current = Date.now();
//       return fn(...props)
//     }
//   }, [fn, delay]);
//   return retFunction;
// }