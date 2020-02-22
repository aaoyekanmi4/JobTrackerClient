import React, { useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import { JobsContext } from "../../context/JobsContext";

import "./JobDetail.css";
const JobDetail = props => {
  const { singleJob,getJobById, error } = useContext(JobsContext);
 
    //Call the fetch API for to GET all jobs on initial mount
    useEffect(() => {
      if (!error) {
        console.log(props);
        getJobById(props.jobId)
      }
      // eslint-disable-next-line
    }, []);
  return (
    <main>
      <h1>Job Detail</h1>
      <div id="details-container">
        <div class="job-and-status">
          <div id="job-details">
            <Link to="/add-job">
              <div>Edit Job</div>
            </Link>
            <h2 id="company-detail">{singleJob.company}</h2>
            <h2 id="role-detail">{singleJob.job_role}</h2>
            <h3 id="location">{singleJob.location}</h3>
            <h3>
              Date Added: <span id="date-detail">2/16/2020</span>
            </h3>
          </div>
          <div id="job-status">
            <h3>
              Applied: <span id="application-status">2/16/2020</span>
            </h3>

            <h4>
              Phone Screen: <span id="phone screen">3/2/2020</span>
            </h4>
            <h4>
              Interview: <span id="interview-status">N/A</span>
            </h4>
            <h4>
              Offer: <span id="offer">N/A</span>
            </h4>
          </div>
        </div>
        <h2>Contacts</h2>
        <div id="contacts">
          <div class="contact">
            <h5>
              {" "}
              <span id="contact-name">Sarah Smith</span>
            </h5>
            <h5>
              {" "}
              <span id="contact-role">Tech Recruiter</span>
            </h5>
            <h5>
              email: <span id="contact-email">sarahs@sarahs.com</span>
            </h5>
            <h5>
              phone: <span id="contact-phone">512-555-5000</span>
            </h5>
            <h5>
              Last Contact Date: <span id="contact-last-date">2/11/2020</span>
            </h5>
            <div>View Details</div>
          </div>
          <Link to="/add-contact">
            <span>+Add new contact</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default JobDetail;
