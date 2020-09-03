import React, { useContext } from "react";

const TodoItems = (Items) => {
   const { entries, delete: deleteTask } = Items;

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