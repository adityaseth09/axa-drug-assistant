import React, { Component } from 'react'
import Menu from './Menu'

class Home extends Component {
    render () {
        return (<div>
                <p>Your adherence score: 10/10</p>
                <p>Your second score: 10/10</p>
                <p>Call to action: GET THE DRUG NOW</p>
                <Menu menuItems={[
                    {name: 'Filler', action:'/filler/'},
                    {name: 'Information', action:'/information/'},
                    {name: 'Adherence', action:'/adherence/'},
                    {name: 'Emergency', action:'/emergency/'}]}/>
                </div>
        )
    }
}

export default Home
