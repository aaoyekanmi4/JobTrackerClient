import React from "react";
import "./JobFrom.css";

const JobForm = () => {
  return (
    <form>
      <h1>Add/Edit Job</h1>
      <label for="company"> Company Name</label>
      <input type="text" id="company" name="company" />
      <label for="role">Role</label>
      <input type="text" id="role" name="role" />
      <label for="location">Location</label>
      <input type="text" id="location" name="location" />
      <label for="applied">Applied</label>
      <input type="text" id="applied" name="applied" />
      <div class="button-holder">
        <input type="submit" value="Add Job" />
      </div>
    </form>
  );
};

export default JobForm;
