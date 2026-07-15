"use client"

import { lazy, Suspense, useState } from "react";
import HomeComp from "./Home";
const DashComp = lazy(() => import("./Dashboard"));

export default function Home() {
  const [nav, setNav] = useState('home')
  return (
    <main>
      <div>
        <button onClick = {() => {setNav("home")}}>Home</button>
        <button onClick={() => {setNav("dash")}}>Dashboard</button>
      </div>
      {
        nav === 'home' && <HomeComp/>
      }
      {
        nav === 'dash' && 
        <Suspense fallback = {<div>Loading Dash</div>}>
          <DashComp/>
        </Suspense>
      }
    </main>
  );
}