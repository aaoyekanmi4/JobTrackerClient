import React, { useState } from "react";
import TokenService from "../services/TokenService";
import { API_BASE_URL } from "../config";
import { useHistory } from "react-router-dom";
const JobsContext = React.createContext();

const JobsContextProvider = props => {
  const history = useHistory();
  const [jobs, setJobs] = useState([]);
  const [singleJob, setSingleJob] = useState("");
  const [error, setError] = useState("");

  const getAllJobs = () => {
    fetch(`${API_BASE_URL}/api/jobs`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        return response.json();
      })
      .then(responseJSON => setJobs(responseJSON))
      .catch(res => setError(res.error));
  };

  const getJobById = id => {
    fetch(`${API_BASE_URL}/api/jobs/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        return response.json();
      })
      .then(job => {
        for (let [key, value] of Object.entries(job)) {
          if (value === null) {
            job[key] = "";
          }
        }
        setSingleJob(job);
      })
      .catch(res => setError(res.error));
  };

  const addJob = job => {
    for (let [key, value] of Object.entries(job)) {
      if (value === "") {
        job[key] = null;
      }
    }
    
    fetch(`${API_BASE_URL}/api/jobs/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(job)
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        history.push("/jobs");
        setJobs(prevJobs => [...prevJobs, job]);
        return response.json();
      })
      .catch(res => {
      
        setError(res.error);
      });
  };
  const editJob = job => {
    for (let [key, value] of Object.entries(job)) {
      if (value === "") {
        job[key] = null;
      }
    }
    fetch(`${API_BASE_URL}/api/jobs/${job.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(job)
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        getJobById(job.id);
      })
      .then(job => {
        history.push("/jobs");
        getAllJobs();
      })
      .catch(res => setError(res.error));
  };
  const deleteJob = id => {
    fetch(`${API_BASE_URL}/api/jobs/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        setJobs(prevJobs => prevJobs.filter(job => job.id !== id));
        return response.json();
      })
      .catch(res => setError(res.error));
  };
  return (
    <JobsContext.Provider
      value={{
        jobs,
        deleteJob,
        editJob,
        getAllJobs,
        singleJob,
        getJobById,
        addJob,
        error,
        setError
      }}
    >
      {props.children}
    </JobsContext.Provider>
  );
};

export { JobsContextProvider, JobsContext };
