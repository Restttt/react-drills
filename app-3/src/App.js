import React, { Component } from "react";
import "./App.css";
import Person from './components/Person.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person />
      </div>
    );
  }
}

export default App;
