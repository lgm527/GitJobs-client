import React, {Component} from 'react'
import Job from './Job'
import JobDetail from './JobDetail'

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
      <div>
      {jobs}
      { this.state.clicked ? <JobDetail job={this.state.jobShow} /> : null }
      </div>
    )
  }
}
