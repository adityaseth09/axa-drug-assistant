import React, {Component} from 'react'
import Menu from './Menu'
import api from './API'
import axa from './AxaApi'
import { getUserID } from './State'

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {birthdate: 'loading...', name:'loading...'}

        api.get_patient('/' + getUserID()).then(info => {
            this.setState({birthdate: info.data.patient.bithdate,
                           name: info.data.patient.name})
        })
    }

    render () {
        return (
            <div>
              <Menu/>
              <h1>Personal Information</h1>
              <div>Full name: { this.state.name }</div>
              <div>Date of Birth: { this.state.birthdate }</div>
            </div>
        )
    }
}

export default Info
