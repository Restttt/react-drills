import React, { Component } from "react";
import "./App.css";
import Login from "./components/Login.jsx"
import Image from "./components/Image.jsx"
import Todo from "./components/Todo.jsx"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Image myImage={'https://i.ytimg.com/vi/4Q1_83VYyms/maxresdefault.jpg'}/>
        <Todo />
      </div>
    );
  }
}

export default App;
