import { TodosContent } from './TodosContent';
import { AddTodos } from './AddTodos';
import React from 'react'
import './App.css'
import { TodosContextProvider } from './TodosContext';

const App = () => {
  return (
    <TodosContextProvider>
      <div className="container">
        <h3 className="teal-text center-align">Todo App</h3>
        <AddTodos/>
        <TodosContent/>
      </div>
    </TodosContextProvider>
    
  )
}

export default App
