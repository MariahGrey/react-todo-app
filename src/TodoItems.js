import React, { useContext } from 'react';
import { TodoItemsContext } from './TodoList';
import styled from 'styled-components'

   const TodoItems = () => {
   const { items: entries, deleteItem: deleteTask } = useContext(TodoItemsContext);   

   const Task = ({ item }) => {
      return (
         <div key={item.key}>
            <DeleteButton onClick={() => deleteTask(item.key)}>
               x
            </DeleteButton>
            <ListItem>{item.text}</ListItem>
         </div>
      );
   }

   const listItems = entries.map((item) => <Task key={item.key} item={item} />);

   return (
      <div>
         <List>
            {listItems}
         </List>
      </div>
   );
}

export default TodoItems;

const DeleteButton = styled.div`
  background-color: #7C77B9;
  color: #FFF;
  border-radius: 50px;
  width: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  left: 235px;
  right: 5px;
  top: 15px;
  bottom:5px;
  position: relative;
  transition: background-color .2s ease-out;
`

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;
  width: 250px;
`
const ListItem = styled.li`
  color: #254D32;
  background-color: rgba(255,255,255,.5);
  padding: 15px;
  font-size: 20px;
  border-radius: 7px;
  list-style: none;
  transition: background-color .2s ease-out;
`