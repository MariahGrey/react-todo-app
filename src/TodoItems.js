import React, { useContext } from 'react';
import { TodoItemsContext } from './TodoList';

   const TodoItems = () => {
   const { items: entries, deleteItem: deleteTask } = useContext(TodoItemsContext);   

   const Task = ({ item }) => {
      return (
         <div key={item.key}>
            <div onClick={() => deleteTask(item.key)} className="deleteButton">
               x
            </div>
            <li>{item.text}</li>
         </div>
      );
   }

   const listItems = entries.map((item) => <Task key={item.key} item={item} />);

   return (
      <div>
         <ul className="theList">
            {listItems}
         </ul>
      </div>
   );
}

export default TodoItems;