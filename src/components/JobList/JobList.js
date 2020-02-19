import React from 'react';
import './JobList.css';
const JobList = () => {
    return (
        <main>
        <h1>All Jobs</h1>
        <div id="jobs-list-container">
        <ul>
           
            <li>
              <span>Company</span>
              <span>Role</span>
              <span>Status</span>
              <span class="view-details">View Details</span>
            </li>
            <li>
                <span>Company</span>
                <span>Role</span>
                <span>Status</span>
                <span class="view-details">View Details</span>
              </li>
              <li>
                <span>Company</span>
                <span>Role</span>
                <span>Status</span>
                <span class="view-details"> View Details</span>
              </li>
        </ul>
        <a href="#">+ Add Job</a>
    </div>
      
    </main>
    )
}

export default JobList
