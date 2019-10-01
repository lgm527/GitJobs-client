import React from 'react';
import Job from './Job';
import JobDetail from './JobDetail';
import Nav from './Nav'
import {profile, left, right, both} from './Profile.module.scss'


export default class Profile extends React.Component {

  state = {
    clicked: false,
    jobShow: {}
  }

  handleClick = (jobObj) => {
    this.setState({jobShow: jobObj, clicked: true})
  }

  render(){
    const favs = this.props.favoriteJobs.map((job) => <Job job={job} key={job.id} handleClick={this.handleClick}/>)
    return(
      <div className={profile}>
      <h1>Welcome {this.props.username}!</h1>
      <div><Nav handleLogOut={this.props.handleLogOut}/></div>
      <br></br><br></br>
      <div className={left}>
      {favs}
      </div>
      <div className={right}>
      { this.state.clicked ? <JobDetail job={this.state.jobShow}/> : null }
      </div>
      <div className={both}></div>
      </div>
    )
  }
}
