import React, { Component } from "react";
import "./App.css";
import Todo from "./components/todo.js";
import TodoList from ".components/todolist.js";

class App extends Component {
  constructor(props){
    super(props);
     this.todos = [
       
     ]
  }

  render(){
    return(
      <div className="App"></div>;
    ) 
  }
  
}

export default App;
