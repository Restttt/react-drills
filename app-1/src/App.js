import React, { Component } from "react";
import "./App.css";
import TextBox from "./components/TextBox.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextBox />
      </div>
    );
  }
}

export default App;
