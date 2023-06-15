import { TodoItem } from './TodoItem';
import React from "react";
import { useTodos } from './TodosContext';
import { useLiveQuery } from 'dexie-react-hooks';

export function TodosContent() {
    const todos = useTodos(); 
    const allItems = useLiveQuery(() => todos.toArray(), []) ;
    return( 
        <div className="card white darken-1">
            <div className="card-content">
                {allItems?.map((item) => (
                    <TodoItem  key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}
  