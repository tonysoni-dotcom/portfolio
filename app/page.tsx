"use client"

import { useEffect, useState } from "react";

export default function Home() {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const {response, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/todos/${pageNumber}`);
  return (
    <main>
      <div className="mx-auto mt-20 flex flex-row justify-center items-center gap-5">
        <button
          disabled = {pageNumber === 1}
          onClick = {() => {setPageNumber(pageNumber - 1)}}
          className="border-1 border-gray-500 w-10"
        >-</button>
        <span>{pageNumber}</span>
        <button 
          disabled = {pageNumber === 200}
          onClick = {() => {setPageNumber(pageNumber + 1)}}
          className="border-1 border-gray-500 w-10"
        >+</button>
      </div>
      <div className="flex justify-center items-center mt-2">
        {
          loading? <span>Loading...</span>:<></>
        }
        {
          response? <span>{response.id} - {response.title}</span> : <></>
        }
        {
          error? <span>Error: {error.message}</span> : <></>
        }
      </div>
    </main>
  );
}

function useFetch(url: string):{response: any, error: Error | null, loading: boolean} {
  const [loading, setLoading] = useState<boolean | null>(null);
  const [response,setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async() => {
      try{
        setLoading(true);
        setResponse(null);
        setError(null);
        const result = await fetch(url, {signal: controller.signal});
        const jsonResult = await result.json();
        setLoading(false);
        setResponse(jsonResult);
      }catch(err) {
        console.log('caught error:', err.name, err.constructor.name);
        if(err instanceof DOMException && err.name === "AbortError") {
          return;
        }else{
          setLoading(false);
          setError(err);
        }
      }
    }
    fetchData();

    return () => {controller.abort()}
  }, [url])
  return {loading, response, error}
}