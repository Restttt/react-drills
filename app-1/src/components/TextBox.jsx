import React, { Component } from "react";

class TextBox extends Component {
    constructor() {
        super();
        this.state = {
            currentText: '',
            myArray: ['hi', 'tom', 'bob', 'john', 'carter'],
            filteredResults: [],
        }
    }

    updateText = (e) => {
        this.setState({currentText: e})
    }

    render() {
        return(
            <div>
                <input onChange={(e) => this.updateText(e.target.value)} />
                {this.state.myArray.filter(item => item.startsWith(this.state.currentText)).map((value, index) => {
                    return <h2 key={index}>{value}</h2>
                })}
            </div>
        )
    }
}


export default TextBox;