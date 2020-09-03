import React, { useState, useRef, useContext, createContext } from "react";
import TodoItems from "./TodoItems"
import "./TodoList.css";

const TodoList = () => {
   const [items, setItems] = useState([]);
   const _inputElement = useRef(null);
   const [context, setContext] = useContext([]);

   const addItem = (e) => {
      if (_inputElement.current.value !== '') {
         setContext = {
            text: _inputElement.current.value,
            key: Date.now()
         };

         const newItemsArray = items.concat(context);

         setItems(newItemsArray);
         
         _inputElement.current.value = '';
      }
    
      e.preventDefault();
   }

   const deleteItem = (key) => {
      const filteredItems = items.filter((item) => {
         return (item.key !== key);
      });

      setItems(filteredItems);
   }
   
   return (
      <div className="TodoListMain">
         <h1>To Do List</h1>
            <div className="header">
               <form onSubmit={addItem}>
                  <input ref={_inputElement} placeholder="Enter Task" />
                  <button type="submit">Add</button>
               </form>
            </div>
            <TodoItems entries={items} delete={deleteItem} />
      </div>
   )
}

export default TodoList;