import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import './App.css';
import Register from './components/Register'
// import Login from './components/Login'
// import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <div className="App">
       <NavLink to='/register' >Register</NavLink>
       &nbsp;|&nbsp;
       <NavLink to='/login' >Login</NavLink>
       &nbsp;|&nbsp;
       <NavLink to='/users' >Users</NavLink>

       <Route path='/register' component={Register}/>
       {/* <Route path='/login' component={Login}/> */}
       {/* <Route path='/users' component={Users}/> */}

      </div>
    );
  }
}

export default App;
