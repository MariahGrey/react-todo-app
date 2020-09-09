import React, { useContext } from 'react';
import { TodoItemsContext } from './TodoList';
import styled from 'styled-components'

const CountItems = () => {
   const { items: entries } = useContext(TodoItemsContext);   
   const numberOfItems = entries.length;

   // early return 
   // if (numberOfItems === 0) return null;
   
   // useContext hook replaces this: <TodoItemsContext.Consumer>

   return (
         <CountList className="countList">
            Items Remaining: {numberOfItems}
         </CountList>  
   ) 
}

export default CountItems;

const CountList= styled.div`
  color: #254D32;
  background-color: rgba(255,255,255,.5);
  padding: 15px;
  font-size: 20px;
  margin: 0;
  border-radius: 7px;
  list-style: none;
  max-width: 225px;
  text-align: center;
`