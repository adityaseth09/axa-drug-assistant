import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Emergency from './Emergency';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/emergency' component={Emergency}/>
    </Switch>
  </main>
);

export default Main;
