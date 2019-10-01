import React from 'react'
import error from './unnamed.png'
import {landingpage} from './LandingPage.module.scss'
import {Link} from 'react-router-dom'

export default class ErrorPage extends React.Component {

  render(){
    return(
      <div className={landingpage}>
      <h1>404 Error ➡️ ACCESS DENIED</h1>
      <br></br>
      <Link to='/'>Oh Snap, Go Back</Link>
      <br></br>
      <img src={error} alt='error cat' style={{height: '700px', width: '700px'}}/>
      </div>
    )
  }
}
