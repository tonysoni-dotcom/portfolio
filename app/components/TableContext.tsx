"use client"

import { createContext, useReducer } from "react"

export const TableContext = createContext<any>(null);

const TableReducer = (state, action) => {
    switch(action.type) {
        case "add-edit" : 
            const currState = {...state}
            let updateObject = {...currState[action.payload.id]};
            updateObject[action.payload.col] = action.payload.value;
            currState[action.payload.id] = updateObject;
            return currState;
    }
}

export default function TableProvider({children}) {
    const [state, dispatch] = useReducer(TableReducer, {});
    return (
        <TableContext.Provider value = {{tableState: state, tableDispatch: dispatch}}>
            {children}
        </TableContext.Provider>
    )
}