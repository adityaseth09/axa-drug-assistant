import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";
import Menu from "./Menu";
import api from "./API";

const alergies_options = [
    { key: 'epi_pen', text: 'Epi Pen', value: 'epi_pen' },
    { key: 'asthma_spray', text: 'Asthma Spray', value: 'asthma_spray' },
    { key: 'design', text: 'Insulin', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]

const name_options = [
    { key: 'epi_pen', text: 'Epi Pen', value: 'epi_pen' },
    { key: 'asthma_spray', text: 'Asthma Spray', value: 'asthma_spray' },
    { key: 'design', text: 'Insulin', value: 'design' },
    { key: 'ember', text: 'Ember', value: 'ember' },
    { key: 'html', text: 'HTML', value: 'html' },
    { key: 'ia', text: 'Information Architecture', value: 'ia' },
    { key: 'javascript', text: 'Javascript', value: 'javascript' },
    { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
    { key: 'meteor', text: 'Meteor', value: 'meteor' },
    { key: 'node', text: 'NodeJS', value: 'node' },
    { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
    { key: 'python', text: 'Python', value: 'python' },
    { key: 'rails', text: 'Rails', value: 'rails' },
    { key: 'react', text: 'React', value: 'react' },
    { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
    { key: 'ruby', text: 'Ruby', value: 'ruby' },
    { key: 'ui', text: 'UI Design', value: 'ui' },
    { key: 'ux', text: 'User Experience', value: 'ux' },
]


const DropdownAlergieseMultipleSelection = () => (
    <Dropdown placeholder='Known Allergies' fluid multiple selection options={alergies_options} />
)
const DropdownConditionsMultipleSelection = () => (
    <Dropdown placeholder='Medically relevant conditions' fluid multiple selection options={alergies_options} />
)
const DropdownCurrentDrugsMultipleSelection = () => (
    <Dropdown placeholder='Currently administered drugs' fluid multiple selection options={alergies_options} />
)

const DropdownNameSearchSelection = () => (
    <Dropdown placeholder='Patient Name' fluid search selection options={name_options} />
)

class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {allergies: null,
            conditions: null,
            drugs: null}
        {emergency_meds:[]}
        {all_patients:[]}

        api.get('/patients').then(info=> {
            var new_info=[]
            for (var i=0; i<info.data.patients.length;i++){
                new_info.push({key:info.data.patients[i][0],text:info.data.patients[i][3],value:info.data.patients[i][0]})
            }



                        console.log(new_info)
                        console.log(info.data.patients)

                        this.setState({all_patients: new_info})}).catch(err => console.log("errx",err))

                    //api.get_patient('/1/allergies').then(info => this.setState({allergies: info.data})).catch(err => console.log("errx",err))
                    //api.get_patient('/1/conditions').then(info => this.setState({conditions: info.data})).catch(err => console.log("errx",err))
                    //api.get_patient('/1/drugs').then(info => this.setState({drugs: info.data})).catch(err => console.log("errx",err))
                }

                render () {
                    return (
                        <div>
                            <h1>Patient Information</h1>
                            <Dropdown placeholder='Patient Name' fluid search selection options={this.state.all_patients} />
                            <h2>Emergency Medication</h2>
                            <Dropdown placeholder='Emergency Medication' fluid multiple selection options={this.state.emergency_meds} />
                            <h2>Allergies</h2>
                            <h2>Conditions</h2>
                            <div>{ this.state.conditions === null ? "loading ..." : [].concat(this.state.conditions).length === 0 ? (<p>None</p>) : (<ul> { [].concat(this.state.conditions).map(d => ( <li key={"cond-"+d.name}> { d.name }</li> )) }</ul>) }</div>
                            <h2>Current Drugs</h2>
                            <div>{ this.state.drugs === null ? "loading ..." : [].concat(this.state.drugs).length === 0 ? (<p>None</p>) : (<ul> { [].concat(this.state.drugs).map(d => ( <li key={"drug-"+d.name}> { d.name }</li> )) }</ul>) }</div>
                        </div>
                    )
                }
            }


            class DoctorView extends Component {
                render () {
                    return (<Info/>
                    )
                }
            }



            export default DoctorView
