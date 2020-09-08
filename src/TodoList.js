import React, { useState, useRef, createContext, Provider } from "react";
import TodoItems from "./TodoItems"
import "./TodoList.css";

const TodoList = () => {
   const [items, setItems] = useState([]);
   const MyContext = createContext({ text: '', key: null });
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
         console.log(MyContext);
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

   const value = {
      actions: {
         addItem,
         deleteItem
      },
      item: {
         text: '',
         key: null
      }
   };
   
   return (
         <div className="TodoListMain">
            <h1>To Do List</h1>
               <div className="header">
                  <form onSubmit={addItem}>
                     <input ref={_inputElement} placeholder="Enter Task" />
                     <button type="submit">Add</button>
                  </form>
               </div>
               <Provider value={{ entries: item, deleteItem }} >
                  <TodoItems />
               </Provider>    
         </div>
   )
}

export default TodoList;