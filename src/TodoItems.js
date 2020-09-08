import React, { useContext } from "react";

   // Remove props to use context - how to change this section?
   // const TodoItems = (props) => {

   const TodoItems = () => {
   const { entries, delete: deleteTask } = useContext(entries, deleteTask);

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