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
        <span>
          <p id="month">{moment(job.date_created).format("MMM")}</p>
          <p id="day">{moment(job.date_created).format("DD")}</p>
        </span>
        <span>
          <p id="company">{job.company}</p>
          <p id="role">{job.job_role}</p>
        </span>
        <span
          id="list-status"
          className={job.applied ? "applied" : "not-applied"}
        >
          {job.applied ? "Applied" : "Not Applied"}
        </span>
    
        
        <button id="trash-icon" onClick={()=>deleteJob(job.id)}><span><i class="fas fa-trash"></i><p className="delete-icon-text">Delete</p></span></button>
        <Link to={`/job-detail/${job.id}`}>
          <span className="view-details"><i class="fas fa-chevron-right"></i></span>
        </Link>
      </li>
    ));
  };
  return (
    <section className="jobs">
      <h1>Saved Jobs</h1>
      <div id="jobs-list-container">
        <ul>{jobListItems()}</ul>
        <Link to="/add-job">+ Add Job</Link>
      </div>
    </section>
  );
};

export default JobList;
