import React, { useContext } from 'react';
import { TodoItemsContext } from './TodoList';

const CountItems = () => {
   const { items: entries } = useContext(TodoItemsContext);   
   const numberOfItems = entries.length;

      if (numberOfItems !== 0) {
         return (
            <div className="countList">
               Items Remaining: {numberOfItems}
            </div>  
         )} return (null)
}

export default CountItems;