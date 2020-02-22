import React from "react";
import "./JobStatus.css";

const JobStatus = () => {
  return (
    
    <section id="job-status">
      <h1>Add/Edit Status</h1>
      <label htmlFor="applied"> Applied</label>
      <input type="date" id="applied" name="applied" />
      <label htmlFor="phone-screen">Phone Screen</label>
      <input type="date" id="phone-screen" name="phone-screen" />
      <label htmlFor="interview">Interview</label>
      <input type="date" id="interview" name="interview" />
      <label htmlFor="offer">Offer</label>
      <input type="text" id="offer" name="offer" />

      <div class="button-holder">
        <input type="submit" value="Add Job" />
      </div>
      </section>
    
  );
};

export default JobStatus;
