import React, {Component} from 'react';
import './App.css';
import LandingPage from './LandingPage'
import JobContainer from './JobContainer'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import {Switch, Route, withRouter} from 'react-router-dom'
import ErrorPage from './ErrorPage'

class App extends Component {

  state = {
    username: '',
    user_id: '',
    favoriteJobs: []
  }

  componentDidMount(){
    if(localStorage.token){
      this.getProfile()
    } else {
      this.props.history.push('/')
    }
  }

  addFavorite = (id) => {
    fetch('http://localhost:3000/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
        job_id: id
      })
    }).then(res => res.json())
    .then(() => {
      window.alert('saved for later')
      this.getFavs(this.state.user_id)
      }
    )
  }

  getProfile = () => {
    fetch('http://localhost:3000/profile',{
      headers: {
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
    .then(res => res.json())
    .then(user => {
      this.setState({username: user.username, user_id: user.id})
      this.getFavs(user.id)
    })
  }

  handleLogOut = () => {
    localStorage.clear()
    this.props.history.push('/')
  }

  getFavs = (id) => {
    fetch(`http://localhost:3000/users/${id}`)
    .then(res => res.json())
    .then(user => {
      this.setState({
        favoriteJobs: user.jobs
      })
    })
  }

  render(){
    return (
      <Switch>
            <Route
              path={'/jobs'}
              render={routerProps => <JobContainer {...routerProps} username={this.state.username} addFavorite={this.addFavorite} handleLogOut={this.handleLogOut}/>} />
            <Route path={'/login'} render={routerProps => <Login {...routerProps} getProfile={this.getProfile} />}/>
            <Route path={'/signup'} render={routerProps => <Signup {...routerProps} getProfile={this.getProfile} />}/>
            <Route path={'/profile'} render={routerProps => <Profile {...routerProps} username={this.state.username} favoriteJobs={this.state.favoriteJobs} handleLogOut={this.handleLogOut}/>} />
            <Route exact path={'/'} render={routerProps => <LandingPage {...routerProps} handleLogOut={this.handleLogOut}/>} />
            <Route component={ErrorPage} />
      </Switch>
    )
  }
}

export default withRouter (App);
