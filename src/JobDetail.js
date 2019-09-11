import React, {Component} from 'react'
import {jobdetail} from './JobDetail.module.scss'
import ReactHtmlParser from 'react-html-parser'

class JobDetail extends Component {

  render(){
    const { title, location, company, description, id } = this.props.job

    return(
      <div className={jobdetail}>
      <p>{title}<span onClick={() => {this.props.addFavorite(id)}}>&#x2661;</span></p>
      <p>{location}</p>
      <p>{company}</p>
      {ReactHtmlParser(description)}
      </div>
    )
  }
}

export default JobDetail;
