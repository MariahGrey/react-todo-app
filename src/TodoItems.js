import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
   constructor(props) {
      super(props);
      
      this.createTasks = this.createTasks.bind(this);
   }

   // creates a list item that can be clicked to delete
   createTasks(item) {
      return <li onClick={() => this.delete(item.key)}  key={item.key}>{item.text}</li>
   }

   delete(key) {
      this.props.delete(key);
   }

   // Added flip move animation for transition of add/delete
   render() {
      var TodoEntries = this.props.entries;
      var listItems = TodoEntries.map(this.createTasks);

      return (
         <div>
            <ul className="theList">
               <FlipMove duration={250} easing="ease-out">
                  {listItems}
               </FlipMove>
            </ul>
         </div>
         
      );
   }
};

export default TodoItems;