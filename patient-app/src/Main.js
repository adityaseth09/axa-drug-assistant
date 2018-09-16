import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Emergency from './Emergency'
import Login from './Login'
import Info from './Info'
import Profile from './Profile'
import DrugInfo from './DrugInfo'
import Adherence from './Adherence'
import DoctorView from './DoctorView'
import {getIsDoctor, getAccessToken } from './State'


function Main() {

    if (getAccessToken() !== null &&!getIsDoctor()) {
        return (
            <main>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/emergency/' component={Emergency}/>
                <Route path='/information/' component={Info}/>
                <Route path='/adherence/' component={Adherence}/>
                <Route path='/profile/' component={Profile}/>
                <Route path="/drug/:id" component={DrugInfo} />
                <Route path='/login/' component={Login}/>
              </Switch>
            </main>
        )
    } else if(getAccessToken() !== null && getIsDoctor()) {
        return (
            <main>
                <Route exact path='/' component={DoctorView}/>
            </main>
        )
    } else{
            return (
                <main>
                    <Login/>
                </main>
            )
    }

}

export default Main
