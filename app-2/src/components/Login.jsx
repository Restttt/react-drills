import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super();
        
        this.state = {
            username: '',
            password: '',
        }
    }

    submitUserName = (e) => {
        this.setState({username: e })
    }

    submitPassword = (e) => {
        this.setState({password: e})
    }

    loginUser = () => {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.submitUserName(e.target.value)}/>
                <input onChange={(e) => this.submitPassword(e.target.value)}/>
                <button onClick={() => this.loginUser()}>Login</button>
            </div>
        )
    }
}

export default Login