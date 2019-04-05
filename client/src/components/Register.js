import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {
    state = {
        username: '',
        password: ''
     }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <input type="text" placeholder='username' name='username' id='username' value={this.state.username} onChange={this.handleChange}/>
            <input type="password" placeholder='password' name='password' id='password' value={this.state.password} onChange={this.handleChange}/>
            <button>Register</button>
        </form>
      </div>
    )
  }

  handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name] : value })
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3300/api/register', this.state)
      .then(res => {
          axios.post('http://localhost:3300/api/login', this.state).then(res => {
            localStorage.setItem('token', res.data.token)
            this.props.history.push('/users') 
          }).catch(err => {
            console.error('error on login')
          })
     }).catch(err => {
      console.error(err)
    })
  }

}
