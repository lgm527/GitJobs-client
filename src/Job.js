import React, {Component} from 'react'
import {job} from './Job.module.scss'

export default class Job extends Component {

  render(){
    const { title, location, company, company_logo, description, apply } = this.props.job
    return (
      <div className={job} onClick={() => {this.props.handleClick(this.props.job)}}>
      <b>Title:</b> {title}<br></br><br></br><b>Company:</b> {company}<br></br><br></br><b>Location:</b> {location}
      </div>
    )
  }
}
