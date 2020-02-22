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
    fetch(`http://localhost:8000/api/jobs/${id}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(responseJSON => setSingleJob(responseJSON))
      .catch(err => setError(err))
  }
  
  const addJob =(job)=> {
      
    for (let [key, value] of Object.entries(job)){
      if (value ===''){
        job[key]=null;
      }
    }
    console.log(job);
    fetch('http://localhost:8000/api/jobs/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
  }
  return (
    <JobsContext.Provider value={{ jobs, getAllJobs, singleJob, getJobById,addJob, error }}>
      {props.children}
    </JobsContext.Provider>
  );
};

export { JobsContextProvider, JobsContext };
