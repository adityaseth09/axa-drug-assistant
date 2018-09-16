import React, {Component} from 'react'
import Menu from './Menu'
import api from './API'
import axa from './AxaApi'
import { getUserID } from './State'

class DrugInfo extends Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {druginfo: 'loading...'}
        axa.get_drug('/' + props.match.params.id).then(ans => {
            this.setState({druginfo: ans.data})
        })
    }

    render () {
        return (
            <div>
              <Menu/>
              <h1>Drug Information</h1>
              <div>Title: { this.state.druginfo.title }</div>
              <div>Auth Holder: { this.state.druginfo.authHolder }</div>
              <div>Substance: { this.state.druginfo.substances }</div>
            </div>
        )
    }
}

export default DrugInfo
