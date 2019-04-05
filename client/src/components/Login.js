import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    state = { 
        username: 'test3',
        password: 'test'
    }
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
            <input type="text" placeholder='username' name="username" id="username" value={this.state.username} onChange={this.handleChange} />
            <input type="text" placeholder='password' name="password" id="password" value={this.state.password} onChange={this.handleChange} />
            <button>Submit</button>
        </form>
      </div>
    )
  }

  handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value })
  }

  handleSubmit = event => {
      event.preventDefault();

      axios.post('http://localhost:3300/api/login', this.state).then(res => {
          localStorage.setItem('token', res.data.token)
          this.props.history.push('/jokes')
      }
      ).catch(err => {
          console.err(err)
      })
  }
}
