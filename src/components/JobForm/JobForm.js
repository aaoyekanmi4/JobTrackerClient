import React, { useState, useContext, useEffect } from "react";
import { JobsContext } from "../../context/JobsContext";

import "./JobForm.css";

const JobForm = props => {
  const { addJob, singleJob, editJob, error, setError } = useContext(
    JobsContext
  );
  const [jobEntry, setJobEntry] = useState({
    company: "",
    job_role: "",
    job_location: "",
    job_description: "",
    found_at: "",
    applied: "",
    phone_screen: "",
    interview: "",
    offer: ""
  });

  //set value of jobEntry if there is an id for a job to edit in props
  useEffect(() => {
    const id = Number(props.jobId);
    if (singleJob.id === id) {
      setJobEntry(prevState => {
        return { ...prevState, ...singleJob };
      });
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setError("");
    setJobEntry(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    //edit if there is an id, just add if not

    if (props.jobId) {
      editJob(jobEntry);
    } else {
      addJob(jobEntry);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>* Required</p>
      {error && <p className="error">{error}</p>}
      <div id="job-overview">
        <h1>{props.jobId ? "Edit Job Details" : "Add Job Details"}</h1>
        <label className="form-label" htmlFor="company">
          {" "}
          Company Name *
        </label>
        <input
          className="form-input"
          type="text"
          id="company-form"
          name="company"
          value={jobEntry.company}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="role">
          Role *
        </label>
        <input
          className="form-input"
          type="text"
          id="role"
          name="job_role"
          value={jobEntry.job_role}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="location">
          Location *
        </label>
        <input
          className="form-input"
          type="text"
          id="job_location"
          name="job_location"
          value={jobEntry.job_location}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="applied">
          Description
        </label>
        <input
          className="form-input"
          type="text"
          id="description"
          name="job_description"
          value={jobEntry.job_description}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="source">
          Job Source
        </label>
        <input
          className="form-input"
          type="text"
          id="source"
          name="found_at"
          value={jobEntry.found_at}
          onChange={handleChange}
        />
      </div>
      <div id="job-status-form">
        <h1>{props.jobId ? "Edit Status" : "Add Status"}</h1>
        <label className="form-label" htmlFor="applied">
          {" "}
          Applied
        </label>
        <input
          className="form-input"
          type="date"
          id="applied"
          name="applied"
          value={jobEntry.applied}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="phone-screen">
          Phone Screen
        </label>
        <input
          className="form-input"
          type="date"
          id="phone-screen"
          name="phone_screen"
          value={jobEntry.phone_screen}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="interview">
          Interview
        </label>
        <input
          className="form-input"
          type="date"
          id="interview"
          name="interview"
          value={jobEntry.interview}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="offer">
          Offer
        </label>
        <input
          className="form-input"
          type="text"
          id="offer"
          name="offer"
          value={jobEntry.offer}
          onChange={handleChange}
        />
      </div>
      <div className="form-submit-button button-holder">
        <input type="submit" value={props.jobId ? "Edit Job" : "Add Job"} />
      </div>
    </form>
  );
};

export default JobForm;
