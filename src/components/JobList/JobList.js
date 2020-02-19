import React from 'react';
import { Link } from 'react-router-dom';
import './JobList.css';
const JobList = () => {
    return (
        <main>
        <h1>All Jobs</h1>
        <div id="jobs-list-container">
        <ul>
           
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
              </li>
              <li>
                <span id="company">Gemini</span>
                <span id="role">Web Developer Intern</span>
                <span id="list-status">Applied 2/16/2020</span>
                <Link to='/job-detail'><span class="view-details">View Details</span></Link>
              </li>
        </ul>
        <Link to="/add-job">+ Add Job</Link>
    </div>
      
    </main>
    )
}

export default JobList
