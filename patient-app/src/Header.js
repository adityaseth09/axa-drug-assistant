import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class Header extends Component {
    render () {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Drug Assistent</h1>
              </header>
            </div>
        )
    }
}

export default Header
