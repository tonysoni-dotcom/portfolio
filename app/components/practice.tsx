"use client"
import { createContext, useReducer } from "react";

interface TaskState {
    id: number,
    title: string,
    description: string,
    status: string,
}

type TaskAction = 
  | { type: 'move-task'; payload: { id: number; moveTo: string } }
  | { type: 'edit-task'; payload: { id: number; title: string } }
  | { type: 'add-task'; payload: TaskState };

function taskReducer(state: TaskState[], action: TaskAction): TaskState[] {
    switch(action.type) {
        case "move-task": 
        const currState = [...state];
        let editInd = currState.findIndex(obj => obj.id == action.payload.id);
        if(editInd == -1) return state;
        currState[editInd] = {
            ...currState[editInd],
            status: action.payload.moveTo
        }
        return currState;
        case "edit-task" : 
        // edit task only has to update a particular object reference in the existing array, assuming each todo has its own comp reading objects in the array from the context, only the object ref needs to change, not the array ref.
        return state.map(task => 
            task.id === action.payload.id 
            ? { ...task, title: action.payload.title }
            : task
        );
        case "add-task" : 
        // add task will have to update the entire array reference
        const currTasks = [...state];
        currTasks.push(action.payload);
        return currTasks;
        default : return state;
    }
}



const TaskContext = createContext<any>(null);

const initialTaskList: TaskState[] = []

function TaskProvider({children}) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskList)
    return (
        <TaskContext.Provider value = {{tasks: state, dispatchTasks: dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}

