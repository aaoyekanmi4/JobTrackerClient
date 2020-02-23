import React, { useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";
import { JobsContext } from "../../context/JobsContext";

import "./JobDetail.css";
const JobDetail = props => {
  const { singleJob,getJobById, error } = useContext(JobsContext);
 
    //Call the fetch API for to GET job on mount
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
          <Link to={`/edit-job/${props.jobId}`}>
              <div>Edit Job</div>
            </Link>
            <h2 id="company-detail">{singleJob.company}</h2>
            <h2 id="role-detail">{singleJob.job_role}</h2>
            <h3 id="location">{singleJob.location}</h3>
            <h3>
  Date Added: <span id="date-detail">{moment(singleJob.date_created).format("MMM DD, YYYY")}</span>
            </h3>
            <article>
              <span><h3>Description:</h3> </span>{singleJob.job_description}
            </article>
          </div>
          <div id="job-status">
            <h3>
              Applied: <span id="application-status">{moment(singleJob.applied).format("MMM DD, YYYY")}</span>
            </h3>

            <h4>
              Phone Screen: <span id="phone screen">{singleJob.phone_screen}</span>
            </h4>
            <h4>
              Interview: <span id="interview-status">{singleJob.interview}</span>
            </h4>
            <h4>
              Offer: <span id="offer">{singleJob.offer}</span>
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
