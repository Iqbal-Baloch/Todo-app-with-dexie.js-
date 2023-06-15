import React, { useContext } from "react";
import Dexie from "dexie";

const TodosContext = React.createContext() ;
const useTodos = () =>{
    return useContext(TodosContext); 
}

const db = new Dexie("todoApp") ;
db.version(1).stores({
  todos: "++id, task, completed, date"
})

const {todos} = db ;

function TodosContextProvider({children}){
    return(
        <TodosContext.Provider value={todos}>
            {children}
        </TodosContext.Provider>
    )
}

export {TodosContextProvider, useTodos}