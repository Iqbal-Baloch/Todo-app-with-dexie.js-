import { TodoItem } from './TodoItem';
import React from "react";
export function TodosContent({
  allItems,
  toggleStatus,
  deleteTask
}) {

    return( 
        <div className="card white darken-1">
            <div className="card-content">
                {allItems?.map(({id, completed, task}) => (
                    <TodoItem  key={id} id={id}  toggleStatus={toggleStatus} completed={completed} task={task} deleteTask={deleteTask} />
                ))}
            </div>
        </div>
    );
}
  