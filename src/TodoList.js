import React, { useState, useRef, createContext } from "react";
import TodoItems from "./TodoItems"
import styled from 'styled-components'
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
                     <TaskInput ref={_inputElement} placeholder="Enter Task" />
                     <AddButton type="submit">Add</AddButton>
                  </form>
               </div>
               <CountItems />
               <TodoItems />
         </div>
      </TodoItemsContext.Provider>
   )
}

export default TodoList;

const TaskInput= styled.input`
  padding: 10px;
  font-size: 20px;
  border: 2px solid #FFF;
  border-radius: 7px;
  width: 165px;
`
const AddButton = styled.button`
   padding: 10px;
   font-size: 20px;
   margin: 10px;
   margin-right: 0px;
   background-color: #7C77B9;
   color: #FFF;
   border: 2px solid #7C77B9;
   border-radius: 7px;
`
