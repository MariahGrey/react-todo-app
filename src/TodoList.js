import React, { useState, useRef, createContext } from "react";
import TodoItems from "./TodoItems"
import "./TodoList.css";
import CountItems from "./CountItems";

export const TodoItemsContext = createContext({ items: [], deleteItem: () => null });

const TodoList = () => {
   const [items, setItems] = useState([]);
   const _inputElement = useRef(null);
   
   const addItem = (e) => {
      if (_inputElement.current.value !== '') {
         const newItem = {
            text: _inputElement.current.value,
            key: Date.now()
         };

         const newItemsArray = items.concat(newItem);

         setItems(newItemsArray);

         console.log("added item: " + newItem.key);
         _inputElement.current.value = '';
      }

      e.preventDefault();
   }

   const deleteItem = (key) => {
      const filteredItems = items.filter((item) => {
         console.log("deleted item: " + item.key);
         return (item.key !== key);
      });

      setItems(filteredItems);
   }
   
   return (

      <TodoItemsContext.Provider value={{ items: items, deleteItem: deleteItem }}>
         <div className="TodoListMain">
            <h1>To Do List</h1>
               <div className="header">
                  <form onSubmit={addItem}>
                     <input ref={_inputElement} placeholder="Enter Task" />
                     <button type="submit">Add</button>
                  </form>
               </div>
               <CountItems />
               <TodoItems />
         </div>
      </TodoItemsContext.Provider>
   )
}

export default TodoList;