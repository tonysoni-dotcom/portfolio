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

function useLocalStorage<T>(key:string, value:T){
    const [state, setState] = useState<T>(() => {
        let localData = localStorage.getItem(key);
        try{
            let parsedLocalData:T = JSON.parse(localData);
            return parsedLocalData;
        }catch(err) {
            return value;
        }
    });
    useEffect(() => {
        try{
            let parsedJson:string = JSON.stringify(state);
            localStorage.setItem(key, parsedJson);
        }catch(err) {
            console.log("Error setting value to local storage");
        }
    }, [state, value, key,])
}

function debounce<T extends Function>(fn: T, delay: number): Function {
    let timeout:(null | NodeJS.Timeout) = null;
    return function(...args : any[]) {
        if(timeout) {
            clearInterval(timeout);
        }
        let context = this;
        timeout = setTimeout(() => {
            // fn(...args);
            console.log(this, 'this inside arrow')
            fn.apply(this, args);
        }, delay)
        // timeout = setTimeout(fn.bind(context, ...args), delay)
    }
}

function throttle<T extends Function>(fn: T, delay: number): Function {
    let timeout:(null | NodeJS.Timeout) = null;
    let timerRunning:boolean = false;
    console.log('this inside throttle', this)
    return function(...args : any[]) {
        if(!timerRunning) {
            fn.call(this, ...args);
            timerRunning = true;
            timeout = setTimeout(() => {
                timerRunning = false;
            }, delay)
        }
    }
}



// const obj = {
//     name: 'Vishnu',
//     greet: debounce(function() { console.log(this?.name); }, 500)
// };
const obj = {
    name: 'Vishnu',
    greet: debounce(function(msg?:string) { console.log(this?.name, msg); }, 500)
};

obj.greet();
obj.greet();
obj.greet();

setTimeout(() => {
    obj.greet();
}, 300)
setTimeout(() => {
    obj.greet();
}, 901)