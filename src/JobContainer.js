import React, {Component} from 'react'
import Job from './Job'
import JobDetail from './JobDetail'
import Nav from './Nav'

export default class JobContainer extends Component {

  state = {
    jobs: [],
    clicked: false,
    jobShow: {}
  }

  componentDidMount(){
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(jobs => {this.setState({jobs})})
  }

  handleClick = (jobObj) => {
    this.setState({jobShow: jobObj, clicked: true})
  }

  render(){
    const jobs = this.state.jobs.map((job) => <Job job={job} key={job.id} handleClick={this.handleClick}/>)
    return(
      <div style={{margin: '1%'}}>
      <h1>All the Jobs</h1>
      <div><Nav handleLogOut={this.props.handleLogOut} /></div>
      <br></br><br></br>
      <div style={{float: 'left', width: '30%'}}>
      {jobs}
      </div>
      <div style={{float: 'right', width: '70%'}}>
      { this.state.clicked ? <JobDetail job={this.state.jobShow} addFavorite={this.props.addFavorite}/> : null }
      </div>
      <div style={{clear: 'both'}}></div>
      </div>
    )
  }
}
