import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAccessToken, setUserID } from './State'

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
        api.login(this.state.name, this.state.password).then(() => {
            console.log("access token:", getAccessToken())
            api.get("/getuserid/" + this.state.name).then(ans => {
                setUserID(ans.data.id)
                document.getElementById("goto_home").click()
            })
        })
        event.preventDefault()
    }

    render() {
        return (
            <div style={{ marginTop: "2em" }}>
              <Link to="/" id="goto_home"/>
             <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input style={{ marginLeft: "10px" }} type="text"
                       value={this.state.name} onChange={this.handleChange} />
              </label><br/>
              <label>
                Password:
                <input style={{ marginLeft: "10px" }} type="password"
                       value={this.state.password} onChange={this.handlePwChange} />
              </label><br/>
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
