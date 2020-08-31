import React, { Component } from "react";
import TodoItems from "./TodoItems"
import "./TodoList.css";

class TodoList extends Component {
   constructor(props) {
      super(props);
      
      this.state = {
         items: []
      }

      this.addItem = this.addItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
   }

   // creates item with text/key of current time and adds new item to previous state with other items, then resets value.
   addItem(e) {
      if (this._inputElement.value !== ''){
         var newItem = {
            text: this._inputElement.value,
            key: Date.now()
         };

         this.setState((prevState) => {
            return {
               items: prevState.items.concat(newItem)
            };
         });

         this._inputElement.value = '';
      }

      console.log(this.state.items);

      // prevents page from reloading (you'd lose all list items!)
      e.preventDefault();
   }

   // adds items that don't match the given (delete) key to the array of "keep" items
   deleteItem(key) {
      var filteredItems = this.state.items.filter(function (item) {
         return (item.key !== key);
      });

      this.setState({
         items: filteredItems
      });
   }

   render() {
      return (
         <div className="TodoListMain">
            <h1>To Do List</h1>
            <div className="header">
               <form onSubmit={this.addItem}>
                  <input ref={(a) => this._inputElement = a} placeholder="Enter Task"/>
                  <button type="submit">Add</button> 
               </form>
            </div>
               <TodoItems entries={this.state.items} delete={this.deleteItem} /> 
         </div>
      )
   }
}

export default TodoList;