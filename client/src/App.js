import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import Jokes from './components/Jokes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to='/register' >Register</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/login' >Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/users' >Dad Jokes</NavLink>
        </header>

       <Route path='/register' component={Register}/>
       <Route path='/login' component={Login}/>
       <Route path='/jokes' component={Jokes}/>

      </div>
    );
  }
}

export default App;
