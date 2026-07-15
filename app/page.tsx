"use client"
import { useState, use, Suspense, useMemo, useEffect } from 'react';

function UserProfile({ userPromise }) {
  // use() the promise here
  // render name, email, phone
  let userData:{name: string} = use(userPromise);
  console.log(userData)
  return (
    <div>
      {userData?.name}
    </div>
  )
}

export default function App() {
  // useState lazy init to hold the promise
  // handleRefresh creates a new promise
  const [userPromise, setUserPromise] = useState<Promise<Object> | null>(()=>fetch("https://jsonplaceholder.typicode.com/users/1").then((resp) => resp.json()))

  const [count, setCount] = useState(0);
  // const userPromise = fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json());
  const handleRefresh = () => {
    // setUserPromise(fetch("https://jsonplaceholder.typicode.com/users/1").then((resp) => resp.json()));
  }

  // const userPromise = useMemo(() => {
  //   return fetch("https://jsonplaceholder.typicode.com/users/1").then((resp) => resp.json());
  // }, [])
  
  return (
    <>
      <button onClick={() => setCount(c => c + 1)}>Trigger re-render ({count})</button>
      <button onClick={handleRefresh}>Refresh</button>
      <Suspense fallback={<div>Loading...</div>}>
        <div>heheheh</div>
        <UserProfile userPromise={userPromise} />
      </Suspense>
    </>
  );
}