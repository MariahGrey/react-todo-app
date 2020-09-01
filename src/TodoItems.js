import React from "react";

const TodoItems = (props) => {
   const { entries, delete: deleteTask } = props;

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