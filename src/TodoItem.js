import React from "react";
import { useTodos } from "./TodosContext";
export function TodoItem({item:{id, task, completed}}) {
    const todos = useTodos() ;
    const deleteTask = async(id) => todos.delete(id) ;
    const toggleStatus = async(id, event) => {
        await todos.update(id, {completed: !!event.target.checked}) ;
    }
    return (
        <div className="row" key={id}>
            <p className="col s10">
                <label>
                <input onChange={event => toggleStatus(id, event)} type="checkbox" checked={completed} className="checkbox-blue" /> 
                <span className={`black-tex ${completed && "strike-text"}`}>{task}</span>
                </label>
            </p>
            <i onClick={() => deleteTask(id)} className="col s2 material-icons delete-button">delete</i>
        </div>
    );
}
  