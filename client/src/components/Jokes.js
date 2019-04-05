import React, { Component } from 'react'
import axios from 'axios'


export default class Users extends Component {
    state = {
        jokes : []
    }

  render() {
    return (
      <div>
        <h2>List:</h2>
        {this.state.jokes.map(j => <h3 key={j.id}>{j.joke}</h3>)}
      </div>
    )
  }

  


  componentDidMount() {
    const token = localStorage.getItem('token')
    const reqRequirements = {
      headers: {
        Authorization: token
      }
    }

    axios.get('http://localhost:3300/api/jokes', reqRequirements).then(res => {
      this.setState({ jokes: res.data})
    }).catch(err => {
      console.error(err)
    })
  }  
}
