"use client"

import { InputHTMLAttributes, useContext, useEffect, useState } from "react";
import AboutSection from "./components/AboutSection";
import Carousel from "./components/Carousel";
import ContactSection from "./components/ContactSection";
import ExperiencesSection from "./components/ExperiencesSection";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import TableComp from "./components/TableComp";
import { TableContext } from "./components/TableContext";


export default function Home() {
  console.log("parent rerendered")
  const obj = useContext(TableContext);
  const {tableDispatch} = obj
  let updateState = obj.tableState;
  const [counter, setCounter] = useState<number>(0);
  const [updatedState, setUpdatedState] = useState<any>({});

  console.log(updatedState, 'updated state')
  const [tableData, setTableData] = useState<any[]>(() => {
    return Array.from({ length: 5000 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      nickName: `User ${i + 1}`.toLowerCase(),
      age: 20 + (i % 60)
    }));
  });
  const [tableState, setTableState] = useState([]);
  useEffect(() => {
    const mappedToTableState = tableData?.map((obj) => {
      return {
        id: obj.id,
        name: obj.name,
        age: <input type = "number" name = "age" id = {`${obj.id}-age`} defaultValue={updatedState[obj.id]? updatedState[obj.id].age : obj.age} 
        onChange={(e) => {
          tableDispatch({type: "add-edit", payload: {id: obj.id, col: "age", value: e.target.value}})
        }}
        // onChange={(e) => {
        //   setUpdatedState((updObj:any) => {
        //     let temp = {...updObj};
        //     temp[obj.id] = {
        //       ...obj,
        //       age: e?.target?.value
        //     }
        //     return temp;
        //   })
        // }}
        />,
        nickName: <input type = "text" defaultValue = {updatedState[obj.id]? updatedState[obj.id].nickName : obj.nickName} id = {`${obj.id}-name`} 
        onChange={(e) => {
          tableDispatch({type: "add-edit", payload: {id: obj.id, col: "nickName", value: e.target.value}})
        }}
        // onChange = {(e) => {
        //   setUpdatedState((updObj:any) => {
        //     let temp = {...updObj};
        //     temp[obj.id] = {
        //       ...obj,
        //       nickName: e?.target?.value
        //     }
        //     return temp;
        //   })
        // }}
        />,
      }
    });
    console.log(mappedToTableState, '*****')
    setTableState(mappedToTableState);
  }, [tableData, updatedState])
  return (
    <main>
      <TableComp rows = {tableState}/>
      <button onClick = {() => {setTableData(tableData)}}>Click to rerender</button>
      <button onClick = {() => {setCounter(counter+1)}}>Increment {counter}</button>
      <button onClick = {() => {console.log(updateState)}}>Show update state</button>
      {/* <HeroSection/>
      <Carousel/>
      <AboutSection/>
      <ExperiencesSection/>
      <Projects/>
      <ContactSection/> */}
    </main>
  );
}