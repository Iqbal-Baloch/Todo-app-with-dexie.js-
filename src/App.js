import { TodosContent } from './TodosContent';
import { AddTodos } from './AddTodos';
import React, { useRef } from 'react'
import './App.css'
import Dexie from 'dexie'
import { useLiveQuery } from 'dexie-react-hooks';


const db = new Dexie("todoApp") ;
db.version(1).stores({
  todos: "++id, task, completed, date"
})

const {todos} = db ;

const App = () => {
  const allItems = useLiveQuery(() => todos.toArray(), []) ;
  const inputValue = useRef() ;
  const addTask = async(event)=>{
    event.preventDefault() ;
    await todos.add({
      task: inputValue.current.value, 
      completed: false
    }) ;
    inputValue.current.value = "" ;
  }
  const deleteTask = async(id) => todos.delete(id) ;
  const toggleStatus = async(id, event) => {
    await todos.update(id, {completed: !!event.target.checked}) ;
  }

  return (
    <div className="container">
      <h3 className="teal-text center-align">Todo App</h3>
      <AddTodos   addTask={addTask} inputValue={inputValue}  />
      <TodosContent   allItems={allItems} toggleStatus={toggleStatus} deleteTask={deleteTask}  />
    </div>
  )
}

export default App
