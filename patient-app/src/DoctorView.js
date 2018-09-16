import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";
import Menu from "./Menu";
import api from "./API";

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {all_allergies: [],
                      all_conditions: [],
                      all_drugs: [],
                      emergency_meds:[],
                      all_patients:[]}

        api.get('/patients').then(info=> {
            var new_info=[]
            for (var i=0; i<info.data.patients.length;i++){
                new_info.push({key:info.data.patients[i][0],text:info.data.patients[i][3],value:info.data.patients[i][0]})
            }
            this.setState({all_patients: new_info})
        }).catch(err => console.log("errx",err))

        api.get('/allergies').then(info=> {
            var new_info=[]
            for (var i=0; i<info.data.length;i++){
                new_info.push({key:info.data[i].id,text:info.data[i].name})
            }
            this.setState({all_allergies: new_info})
        }).catch(err => console.log("errx",err))

        api.get('/conditions').then(info=> {
            var new_info=[]
            for (var i=0; i<info.data.length;i++){
                new_info.push({key:info.data[i].id,text:info.data[i].name})
            }
            this.setState({all_conditions: new_info})
        }).catch(err => console.log("errx",err))

        api.get('/drugs').then(info=> {
            var new_info=[]
            for (var i=0; i<info.data.length;i++){
                new_info.push({key:info.data[i].id,text:info.data[i].name})
            }
            this.setState({all_drugs: new_info})
        }).catch(err => console.log("errx",err))
    }

    render () {
        return (
            <div>
              <h1>Patient Information</h1>
              <Dropdown placeholder='Patient Name' fluid search selection options={this.state.all_patients} />
              <h2>Emergency Medication</h2>
              <Dropdown placeholder='Emergency Medication' fluid search selection options={this.state.emergency_meds} />
              <h2>Allergies</h2>
              <Dropdown placeholder='Allergies' fluid search selection options={this.state.all_allergies} />
              <h2>Conditions</h2>
              <Dropdown placeholder='Conditions' fluid search selection options={this.state.all_conditions} />
              <h2>Current Drugs</h2>
              <Dropdown placeholder='Drugs' fluid search selection options={this.state.all_drugs} />
            </div>
        )
    }
}


class DoctorView extends Component {
    render () {
        return (<Info/>)
    }
}



export default DoctorView
