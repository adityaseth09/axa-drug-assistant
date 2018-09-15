import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

const menuItems = [
    {name: 'Home', action:'/'},
    {name: 'Emergency', action:'/emergency/'},
    {name: 'Pharmacy', action:'/pharmacy/'},
    {name: 'Reminders', action:'/reminders/'},
    {name: 'Adherence', action:'/adherence/'},
    {name: 'Filler', action:'/filler/'},
]

class Menu extends Component {
    _handleClick(menuItem) {
        this.setState({ active: menuItem })
    }

    render () {
        return (
              <nav className="demo-buttons">
                {menuItems.map((item) => (
                    <Link key={item.action} to={item.action}
                          className={(this.state === null ? item === "Home" : this.state.active === item) ? "current-demo" : ""}
                          onClick={this._handleClick.bind(this, item)}>{item.name}</Link>
                ))}
              </nav>
        )
    }
}

export default Menu
