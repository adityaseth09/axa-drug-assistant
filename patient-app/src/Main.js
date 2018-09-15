import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Emergency from './Emergency'
import Login from './Login'
import Info from './Info'
import Adherence from './Adherence'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/emergency/' component={Emergency}/>
      <Route path='/information/' component={Info}/>
      <Route path='/adherence/' component={Adherence}/>
      <Route path='/login/' component={Login}/>
    </Switch>
  </main>
)

export default Main
