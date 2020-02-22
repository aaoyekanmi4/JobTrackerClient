import React, { useState } from "react";

const JobsContext = React.createContext();

const JobsContextProvider = props => {
  const [jobs, setJobs] = useState([]);
  const [singleJob, setSingleJob] = useState('');
  const [error, setError] = useState("");

  const getAllJobs = () => {
    fetch("http://localhost:8000/api/jobs")
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(responseJSON => setJobs(responseJSON))
      .catch(err => setError(err));
  };
  const getJobById=(id)=> {
    fetch(`http://localhost:8000/api/jobs/${Number(id)}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(responseJSON => setSingleJob(responseJSON))
      .catch(err => setError(err))
  }
  return (
    <JobsContext.Provider value={{ jobs, getAllJobs, singleJob, getJobById, error }}>
      {props.children}
    </JobsContext.Provider>
  );
};

export { JobsContextProvider, JobsContext };
