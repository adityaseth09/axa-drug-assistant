import React, {Component} from 'react'
import Menu from './Menu'
import api from './API'
import axa from './AxaApi'

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {allergies: 'loading...',
                      conditions: 'loading...',
                      drugs: 'loading...'}

            //api.get_patient('/1').then(function (info) {
    //    console.log(info)
    //    //document.getElementById("info_allergies").replaceChild(info.allergies)
    //    console.log("pre",document.getElementById("info_conditions"))
    //    document.getElementById("info_conditions").replaceChild(info.conditions)
    //    console.log("post",document.getElementById("info_conditions"))
    //    //document.getElementById("info_drugs").replaceChild(info.drugs)
        //}).catch(err => console.log("err1",err))
        axa.get_drug('/33124').then(info => {
            console.log(this)
            this.setState({allergies: JSON.stringify(info),
                           conditions: JSON.stringify(info),
                           drugs: JSON.stringify(info),})
        }).catch(err => console.log("errx",err))
    }

    render () {
        return (
            <div>
              <Menu/>
              <h1>Patient Information</h1>
              <h2>Allergies</h2>
              <div>{ this.state.allergies }</div>
              <h2>Conditions</h2>
              <div>{ this.state.conditions }.</div>
              <h2>Current Drugs</h2>
              <div>{ this.state.drugs }</div>
            </div>
        )
    }
}

export default Info
