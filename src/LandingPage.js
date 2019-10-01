import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {landingpage} from './LandingPage.module.scss'
import logo from './octocat.png'
import Nav from './Nav'

export default class LandingPage extends Component {

  render(){
    return(
      <div className={landingpage}>
      <h1>Welcome to GitJobs or Die Pryin</h1>
        {localStorage.token ?
          (<Nav handleLogOut={this.props.handleLogOut}/>) :
          (<p><Link to='/signup'>Sign Up</Link> <Link to='/login'>Login</Link></p>)}
          <br></br><br></br><br></br><br></br>
        <img src= {logo} alt='git rich logo' style={{height: '600px', width: '600px'}}/>

      </div>
    )
  }
}
