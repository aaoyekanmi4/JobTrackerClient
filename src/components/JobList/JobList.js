import React, {useContext, useEffect} from 'react';
import { JobsContext } from '../../context/JobsContext';
import { Link } from 'react-router-dom';
import * as moment from 'moment';

import './JobList.css';

const JobList = () => {
const {getAllJobs, jobs, error} = useContext(JobsContext);

useEffect(()=> {
  if (!error) {
    getAllJobs();
  }
// eslint-disable-next-line
}, [])

const jobListItems = ()=>{
  return jobs.map(job => <li>

    <span ><p id="month">{moment(job.date_created).format("MMM")}</p><p id="day">{moment(job.date_created).format("DD")}</p></span>
    <span ><p id="company">{job.company}</p><p id="role">{job.job_role}</p></span>
    <span id="list-status" className={job.applied? "applied" : "not-applied"}>{job.applied ? 'Applied':'Not Applied'}</span>
    <Link to='/job-detail'><span class="view-details">View Details</span></Link>
  </li>)
};
    return (
        <section className="jobs">
        <h1>Saved Jobs</h1>
        <div id="jobs-list-container">
        <ul>
      
    {jobs.length ? jobListItems() :error.toString() } 
        {/* <li>
                <span id="company">Gemini</span>
                <span id="role">Web Developer Intern</span>
                <span id="list-status">Applied 2/16/2020</span>
                <Link to='/job-detail'><span class="view-details">View Details</span></Link>
              </li>
            <li>
                <span id="company">Gemini</span>
                <span id="role">Web Developer Intern</span>
                <span id="list-status">Applied 2/16/2020</span>
                <Link to='/job-detail'><span class="view-details">View Details</span></Link>
              </li>
              <li>
                <span id="company">Gemini</span>
                <span id="role">Web Developer Intern</span>
                <span id="list-status">Applied 2/16/2020</span>
                <Link to='/job-detail'><span class="view-details">View Details</span></Link>
              </li> */}
        </ul>
        <Link to="/add-job">+ Add Job</Link>
    </div>
      
    </section>
    )
}

export default JobList
