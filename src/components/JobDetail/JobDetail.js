import React, { useContext,useEffect } from "react";
import { Link } from "react-router-dom";
import * as moment from "moment";
import { JobsContext } from "../../context/JobsContext";
import { ContactsContext} from '../../context/ContactsContext';

import "./JobDetail.css";
const JobDetail = props => {
  const { singleJob,getJobById, error } = useContext(JobsContext);
  const { contacts, getAllContacts, contactsError, deleteContact} = useContext(ContactsContext);
 

  

  
    //Call the fetch API for to GET job on mount
    useEffect(() => {
      if (!error || !contactsError) {
        console.log(props);
        getJobById(props.jobId)
        getAllContacts(props.jobId);
      }
      // eslint-disable-next-line
    }, []);

    const contactsList = contacts.map(contact => {
      return (
        <div class="contact">
        <h5>
          Name:
          <span id="contact-name">{contact.name}</span>
        </h5>
        <h5>
          Role:
          <span id="contact-role">{contact.role}</span>
        </h5>
        <h5>
      contactURL: <span id="contact-url">{contact.contact_url}</span>
        </h5>
        <h5>
      email: <span id="contact-email">{contact.email}</span>
        </h5>
        <h5>
      phone: <span id="contact-phone">{contact.phone}</span>
        </h5>
        <h5>
      Last Contact Date: <span id="contact-last-date">{contact.last_contacted}</span>
        </h5>
        <Link to={`/edit-contact/${contact.id}`}>
              <div>Edit</div>
            </Link>
        <button onClick={()=>deleteContact(contact.id)}>Delete</button>
    
      </div>
      )
    })
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
          {contactsList}
          <Link to="/add-contact">
            <span>+Add new contact</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default JobDetail;
