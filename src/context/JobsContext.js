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
      .then(job=> 
        {
          for (let [key, value] of Object.entries(job)){
            if (value ===null){
              job[key]='';
            }
          }
          setSingleJob(job)
        })
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
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(err => setError(err))
  }
  const editJob = (job) => {
    for (let [key, value] of Object.entries(job)){
      if (value ===''){
        job[key]=null;
      }
    }
    fetch(`http://localhost:8000/api/jobs/${job.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      getJobById(job.id)
    })
    .then(job => {
      getAllJobs();
    })
    .catch(err => setError(err))
  }
  const deleteJob = (id) => {
    fetch(`http://localhost:8000/api/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }})
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).catch(err => setError(err))
  }
  return (
    <JobsContext.Provider value={{ jobs,deleteJob, editJob, getAllJobs, singleJob, getJobById,addJob, error }}>
      {props.children}
    </JobsContext.Provider>
  );
};

export { JobsContextProvider, JobsContext };
