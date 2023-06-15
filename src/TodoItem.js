import React from "react";
export function TodoItem({
  id,
  toggleStatus,
  completed,
  task,
  deleteTask
}) {
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
  