import React, { useContext, useEffect } from "react";
import { JobsContext } from "../../context/JobsContext";
import { Link } from "react-router-dom";
import * as moment from "moment";
import "./JobList.css";

const JobList = () => {
  const { getAllJobs, jobs, error, deleteJob } = useContext(JobsContext);
  
  useEffect(() => {
    if (!error) {
      getAllJobs();
    }
    // eslint-disable-next-line
  }, []);

  //Create a list item for each job returned from api call
  const jobListItems = () => {
    return jobs.map((job,index) => (
      <li key={index}>
        <span className="list-date">
          <p id="month">{moment(job.date_created).format("MMM")}</p>
          <p id="day">{moment(job.date_created).format("DD")}</p>
        </span>
        <span className="company-role-list">
          <p id="company">{job.company}</p>
          <p id="role">{job.job_role}</p>
        </span>
        <span
          id="list-status"
          className={job.applied ? "applied" : "not-applied"}
        >
          {job.applied ? "Applied" : "Not Applied"}
        </span>
 
        <button id="trash-icon-holder" ><span onClick={()=>deleteJob(job.id)}>Delete Job</span></button>
           
        <Link className="view-details" to={`/job-detail/${job.id}`}>
          <span ><i class="fas fa-chevron-right"></i></span>
        </Link>
     
      </li>
    ));
  };
  return (
    <section className="jobs">
      <h1>Saved Jobs</h1>
      <div id="jobs-list-container">
      <Link id="add-job-button" to="/add-job">+ Add Job</Link>
        <ul>{jobs.length? jobListItems() : <h2>No jobs added yet</h2>}</ul>
       
      </div>
    </section>
  );
};

export default JobList;
