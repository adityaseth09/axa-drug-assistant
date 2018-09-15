import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

function Menu() {
    const items = [
        {name: 'Emergency', action:'/emergency/'},
        {name: 'Pharmacy', action:'/pharmacy/'},
        {name: 'Reminders', action:'/reminders/'},
        {name: 'Buy Drug', action:'/buydrug/'},
        {name: 'Adherence', action:'/adherence/'},
    ];
    const buttons = items.map((item) => (<a className="current-demo" key={item.action} href={item.action}>{item.name}</a>))
    return (<nav className="demo-buttons">{buttons}</nav>)
}

class Home extends Component {
    render () {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Drug Assistent</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
              <Menu/>
            </div>
        );
    }
}

export default Home;
