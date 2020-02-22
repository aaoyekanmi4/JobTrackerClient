import React, { useState,useContext} from "react";
import {JobsContext } from '../../context/JobsContext';
import { useHistory }from 'react-router-dom'
import "./JobForm.css";

const JobForm = () => {
  const history = useHistory();

  const { addJob } = useContext(JobsContext);
  const [jobEntry, setJobEntry] = useState({
    company: "",
    job_role: "",
    job_location: "",
    job_description: "",
    found_at: "",
    applied: '',
    phone_screen:'',
    interview: '',
    offer: ''
  });

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setJobEntry(prevState =>{
    return {...prevState, [name]:value}
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
 
  
    addJob(jobEntry);
    history.push('/jobs')
  };
  return (
    <form onSubmit={handleSubmit}>
      <div id="job-overview">
        <h1>Add/Edit Job</h1>
        <label htmlFor="company"> Company Name</label>
        <input
          type="text"
          id="company-form"
          name="company"
          value={jobEntry.company}
          onChange={handleChange}
        />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          name="job_role"
          value={jobEntry.job_role}
          onChange={handleChange}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          name="job_location"
          value={jobEntry.job_location}
          onChange={handleChange}
        />
        <label htmlFor="applied">Description</label>
        <input
          type="text"
          id="description"
          name="job_description"
          value={jobEntry.job_description}
          onChange={handleChange}
        />
        <label htmlFor="source">Job Source</label>
        <input
          type="text"
          id="source"
          name="found_at"
          value={jobEntry.found_at}
          onChange={handleChange}
        />
      </div>
      <div id="job-status-form">
        <h1>Add/Edit Status</h1>
        <label htmlFor="applied"> Applied</label>
        <input
          type="date"
          id="applied"
          name="applied"
          value={jobEntry.applied}
          onChange={handleChange}
        />
        <label htmlFor="phone-screen">Phone Screen</label>
        <input
          type="date"
          id="phone-screen"
          name="phone_screen"
          value={jobEntry.phone_screen}
          onChange={handleChange}
        />
        <label htmlFor="interview">Interview</label>
        <input
          type="date"
          id="interview"
          name="interview"
          value={jobEntry.interview}
          onChange={handleChange}
        />
        <label htmlFor="offer">Offer</label>
        <input
          type="text"
          id="offer"
          name="offer"
          value={jobEntry.offer}
          onChange={handleChange}
        />
      </div>
      <div className="button-holder">
        <input type="submit" value="Add Job" />
      </div>
    </form>
  );
};

export default JobForm;
