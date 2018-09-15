import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAccessToken } from './State'

import api from './API.js'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', password: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handlePwChange = this.handlePwChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({name: event.target.value, password: this.state.password})
    }

    handlePwChange(event) {
        this.setState({name: this.state.name, password: event.target.value})
    }

    handleSubmit(event) {
        api.login(this.state.name, this.state.password).then(function() {
            console.log("access token:", getAccessToken())
            document.getElementById("goto_home").click()
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
             <Link to="/" id="goto_home"/>
             <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.name} onChange={this.handleChange} />
              </label>
              <label>
                Password:
                <input type="password" value={this.state.password} onChange={this.handlePwChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }
}

class Login extends Component {
    render () {
        return (
            <LoginForm/>
        )
    }
}

export default Login
