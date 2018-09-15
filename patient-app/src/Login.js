import React, { Component } from 'react'

import api_get from './API.js'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({name: event.target.value})
    }

    handleSubmit(event) {
        api_get('/patient/items').then(ans => (
            alert('A name was submitted: ' + this.state.name)
        ))
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.name} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
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
