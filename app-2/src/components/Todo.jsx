import React, { Component } from "react";

class Todo extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            newItem: '',
        }
    }  

    

    newToDo = (e) => {
        this.setState({newItem: e})
    }

    addToDo = () => {
        let currentList = this.state.todos;
        currentList.push(this.state.newItem);
        console.log(currentList);
        this.setState({todos: currentList})
    }

    render() {
        const listStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'blue',
            whiteSpace: 'pre-line',
        }
        return(
            <div>
                <h1>My to-do list:</h1>
                <input onChange={(e) => this.newToDo(e.target.value)}/>
                <button onClick={() => this.addToDo()}>Add</button> <br />
                <h2 style={listStyle}>{this.state.todos.join('\n')}</h2>
            </div>
        )
    }
}

export default Todo