"use client"

import { use, useDeferredValue, useMemo, useState, useTransition } from "react";
import Table from "./components/Table";
import { ThemeContext } from "./components/ThemeContext";

const defaultTableData = Array.from({length: 5000}, (_, i) => ({
  id: i,
  text: `Text ${i}`,
  Name: `Name ${i}`,
  Time: `Time ${i}`,
  Age: `Age ${i}`,
  Date: `Date ${i}`,
  Temp: `temp ${i}`,
}))

export default function Home() {
  const [data,setData] = useState(defaultTableData);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const filteredData = useMemo(() => {
    return data.filter(item => {
        let q = deferredQuery;
        if(!q.length) return true;
        let vals = Object.values(item);
        for(let val of vals) {
          if(val.toString().toLowerCase().includes(q.toLowerCase())) {
            return true;
          }
        }
        return false;
      })
  }, [deferredQuery])
  // const [filteredData, setFilteredData] = useState(defaultTableData);

  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setQuery(e.target.value);

    // startTransition(() => {
    //   setFilteredData(data.filter(item => {
    //     let q = e.target.value;
    //     if(!q.length) return true;
    //     let vals = Object.values(item);
    //     for(let val of vals) {
    //       if(val.toString().toLowerCase().includes(q.toLowerCase())) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }))
    // })
  }

  return (
    <main className="bg-black min-h-screen flex justify-center items-center flex-col">
      <input value={query} onChange={handleChange} placeholder="Search..." className="border-1 rounded-sm"/>
      {
        isPending?
        <span>Loading...</span>
        :
        <Table
          data = {filteredData}
        />
      }
      <Consumer shouldRead={true}/>
    </main>
  )
}

function Consumer({ shouldRead }) {
  console.log('Consumer rendered');
  if (shouldRead) {
    const theme = use(ThemeContext);
    return <div>{theme}</div>;
  }
  return <div>Not reading theme</div>;
}
// "use client"

// import { use, useState, useTransition } from "react";
// import Table from "./components/Table";
// import { ThemeContext } from "./components/ThemeContext";

// const defaultTableData = Array.from({length: 5000}, (_, i) => ({
//   id: i,
//   text: `Text ${i}`,
//   Name: `Name ${i}`,
//   Time: `Time ${i}`,
//   Age: `Age ${i}`,
//   Date: `Date ${i}`,
//   Temp: `temp ${i}`,
// }))

// export default function Home() {
//   const [data,setData] = useState(defaultTableData);
//   const [query, setQuery] = useState("");
//   const [filteredData, setFilteredData] = useState(defaultTableData);

//   const [isPending, startTransition] = useTransition();

//   const handleChange = (e) => {
//     setQuery(e.target.value);

//     startTransition(() => {
//       setFilteredData(data.filter(item => {
//         let q = e.target.value;
//         if(!q.length) return true;
//         let vals = Object.values(item);
//         for(let val of vals) {
//           if(val.toString().toLowerCase().includes(q.toLowerCase())) {
//             return true;
//           }
//         }
//         return false;
//       }))
//     })
//   }

//   return (
//     <main className="bg-black min-h-screen flex justify-center items-center flex-col">
//       <input value={query} onChange={handleChange} placeholder="Search..." className="border-1 rounded-sm"/>
//       {
//         isPending?
//         <span>Loading...</span>
//         :
//         <Table
//           data = {filteredData}
//         />
//       }
//       <Consumer shouldRead={true}/>
//     </main>
//   )
// }

// function Consumer({ shouldRead }) {
//   console.log('Consumer rendered');
//   if (shouldRead) {
//     const theme = use(ThemeContext);
//     return <div>{theme}</div>;
//   }
//   return <div>Not reading theme</div>;
// }
// "use client"

// import { use, useState, useContext } from 'react';
// import { ThemeContext } from './components/ThemeContext';

// function Consumer({ shouldRead }: { shouldRead: boolean }) {
//   console.log('Consumer rendered, shouldRead:', shouldRead);
  
//   if (shouldRead) {
//     const theme = use(ThemeContext);
//     return <div>Reading theme: {theme}</div>;
//   }
  
//   return <div>Not reading theme</div>;
// }

// export default function Home() {
//   const [shouldRead, setShouldRead] = useState(false);
  
//   return (
//     <main>
//       <button onClick={() => setShouldRead(s => !s)}>
//         Toggle shouldRead (currently: {String(shouldRead)})
//       </button>
//       <Consumer shouldRead={shouldRead} />
//     </main>
//   );
// }