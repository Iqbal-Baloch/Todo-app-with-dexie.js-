import React, { useRef } from "react";
import { useTodos } from "./TodosContext";

export function AddTodos() {
    const inputValue = useRef() ;
    const todos = useTodos() ;
    const addTask = async(event)=>{
        event.preventDefault() ;
        await todos.add({
          task: inputValue.current.value, 
          completed: false
        }) ;
        inputValue.current.value = "" ;
    }
    return (
        <form className="add-item-form" onSubmit={addTask}>
            <input ref={inputValue} type="text" className="itemField" placeholder="What do you want to do today?" required />
            <button type="submit" className="waves-effect btn teal right">
                Add
            </button>
        </form>
    );
}
  