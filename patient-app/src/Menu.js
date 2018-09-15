import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'


const defaultMenuItems = [
    {name: 'Home', action:'/'},
//    {name: 'Filler', action:'/filler/'},
//    {name: 'Info', action:'/info/'},
//    {name: 'Adherence', action:'/adherence/'},
//    {name: 'Emergency', action:'/emergency/'}
]


class Menu extends Component {
    _handleClick(menuItem) {
        this.setState({ active: menuItem })
    }

    render () {
        return (
              <nav className="demo-buttons">
                {(this.props.menuItems || defaultMenuItems).map((item) => (
                    <Link key={item.action} to={item.action}
                          className={(this.state === null ? item === "Home" : this.state.active === item) ? "current-demo" : ""}
                          onClick={this._handleClick.bind(this, item)}>{item.name}</Link>
                ))}
              </nav>
        )
    }
}

export default Menu
