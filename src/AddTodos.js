import React from "react";
export function AddTodos({
  addTask,
  inputValue
}) {

  return (
    <form className="add-item-form" onSubmit={addTask}>
        <input ref={inputValue} type="text" className="itemField" placeholder="What do you want to do today?" required />
        <button type="submit" className="waves-effect btn teal right">
            Add
        </button>
    </form>
  );
}
  