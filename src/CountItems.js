import React, { useContext } from 'react';
import { TodoItemsContext } from './TodoList';

const CountItems = () => {
   const { items: entries } = useContext(TodoItemsContext);   
   const numberOfItems = entries.length;

   // early return 
   // if (numberOfItems === 0) return null;
   
   // useContext hook replaces this: <TodoItemsContext.Consumer>

   return (
         <div className="countList">
            Items Remaining: {numberOfItems}
         </div>  
   ) 
}

export default CountItems;