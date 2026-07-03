"use client"

import { useEffect, useState } from "react";
// import your useFetch

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function FetchTest() {
  const [todoId, setTodoId] = useState(1);
  const { data, loading, error } = useFetch<Todo>(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  
  return (
    <main className="min-h-screen bg-black text-white p-10 flex flex-col gap-4">
      <div className="flex gap-2">
        <button 
          onClick={() => setTodoId(id => id - 1)} 
          disabled={todoId <= 1}
          className="border rounded px-4 py-2"
        >
          Prev
        </button>
        <span>Todo #{todoId}</span>
        <button 
          onClick={() => setTodoId(id => id + 1)}
          className="border rounded px-4 py-2"
        >
          Next
        </button>
      </div>
      
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && (
        <div>
          <p>Id: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? "Yes" : "No"}</p>
        </div>
      )}
    </main>
  );
}

type FetchState<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
};
function useFetch<T>(url: string): FetchState<T>{
    const [data, setData] = useState<T|null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        const controller = new AbortController();

        setData(null);
        setError(null);
        setLoading(true);

        const fetchData = async():Promise<void> => {
            try{
                // setLoading(true);
                const data = await fetch(url,{ signal: controller.signal });
                if (!data.ok) throw new Error(`HTTP ${data.status}`)
                const jsonData = await data.json();
                setData(jsonData);
                setLoading(false);
            }catch(err) {
                if(err instanceof Error) {
                    if(err.name == "AbortError") {
                        return;
                    }
                    setLoading(false);
                    setError(err);
                }
            }
        }
        fetchData();
        return () => {
            controller.abort();
        }
    }, [url])
    return {
        data, loading, error
    }
}