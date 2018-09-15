import React, {Component} from 'react'
import Menu from './Menu'
import api from './API'
import axa from './AxaApi'

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {allergies: null,
                      conditions: null,
                      drugs: null}

        api.get_patient('/1/allergies').then(info => this.setState({allergies: info.data})).catch(err => console.log("errx",err))
        api.get_patient('/1/conditions').then(info => this.setState({conditions: info.data})).catch(err => console.log("errx",err))
        api.get_patient('/1/drugs').then(info => this.setState({drugs: info.data})).catch(err => console.log("errx",err))
    }

    render () {
        return (
            <div>
              <Menu/>
              <h1>Patient Information</h1>
              <h2>Allergies</h2>
              <div>{ this.state.allergies === null ? "loading ..." : [].concat(this.state.allergies).length === 0 ? (<p>None</p>) : (<ul> { [].concat(this.state.allergies).map(d => ( <li key="alg-{d.id}"> { d.name }</li> )) }</ul>) }</div>
              <h2>Conditions</h2>
              <div>{ this.state.conditions === null ? "loading ..." : [].concat(this.state.conditions).length === 0 ? (<p>None</p>) : (<ul> { [].concat(this.state.conditions).map(d => ( <li key="cond-{d.id}"> { d.name }</li> )) }</ul>) }</div>
              <h2>Current Drugs</h2>
              <div>{ this.state.drugs === null ? "loading ..." : [].concat(this.state.drugs).length === 0 ? (<p>None</p>) : (<ul> { [].concat(this.state.drugs).map(d => ( <li key="drug-{d.id}"> { d.name }</li> )) }</ul>) }</div>
            </div>
        )
    }
}

export default Info
