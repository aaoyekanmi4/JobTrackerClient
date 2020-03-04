import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { JobsContext } from "../../context/JobsContext";
import { ContactsContext } from "../../context/ContactsContext";

import "./JobDetail.css";
const JobDetail = props => {
  const { singleJob, getJobById, error } = useContext(JobsContext);
  const { contacts, getAllContacts, contactsError, deleteContact } = useContext(
    ContactsContext
  );

  //Call the fetch API to GET job and contacts on mount
  useEffect(() => {
    if (!error || !contactsError) {
      console.log(props);
      getJobById(props.jobId);
      getAllContacts(props.jobId);
    }
    // eslint-disable-next-line
  }, []);

  const contactsList = contacts.map((contact, index) => {
    return (
      <div className="contact" key={index}>
        <div className="edit-delete-contact">
          <Link
            className="edit-contact-button"
            to={`/edit-contact/${contact.id}`}
          >
            <i class="fas fa-edit"></i>
          </Link>
          <button
            className="delete-contact-button"
            onClick={() => deleteContact(contact.id)}
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
        <div className="contact-content">
          <h5>
            <span className="contact-name">{contact.name}</span>
          </h5>
          <h5>
            <span className="contact-role">{contact.role}</span>
          </h5>

          <h5>
            Email: <span id="contact-email">{contact.email}</span>
          </h5>
          <h5>
            Phone: <span id="contact-phone">{contact.phone}</span>
          </h5>
          {contact.contact_url ? (
            <h5>
              url: <span id="contact-url">{contact.contact_url}</span>
            </h5>
          ) : (
            ""
          )}
          <h5>
            Last Contacted:{" "}
            <span id="contact-last-date">
              {moment(singleJob.date_created).format("MMM DD, YYYY")}
            </span>
          </h5>
        </div>
      </div>
    );
  });

  return (
    <main>
      <div id="details-container">
        <div className="job-and-status">
          <div id="job-details">
            <Link id="detail-edit-button" to={`/edit-job/${props.jobId}`}>
              <i className="fas fa-edit"></i> Edit Job
            </Link>
            <h2 id="company-detail">{singleJob.company}</h2>
            <h2 id="role-detail">Role: {singleJob.job_role}</h2>
            <h3 id="location"> Location: {singleJob.job_location}</h3>

            <article>
              <span>
                <h3>Description:</h3>{" "}
              </span>
              {singleJob.job_description}
            </article>
          </div>
          <div id="job-status">
            <h2 id="status-title">Status</h2>
            <h3>
              Date Added:{" "}
              <span id="date-detail">
                {moment(singleJob.date_created).format("MMM DD, YYYY")}
              </span>
            </h3>
            <h3>
              Applied:{" "}
              <span id="application-status">
                {singleJob.applied
                  ? moment(singleJob.applied).format("MMM DD, YYYY")
                  : ""}
              </span>
            </h3>

            <h4>
              Phone Screen:{" "}
              <span id="application-status">
                {singleJob.phone_screen
                  ? moment(singleJob.phone_screen).format("MMM DD, YYYY")
                  : ""}
              </span>
            </h4>
            <h4>
              Interview:{" "}
              <span id="application-status">
                {singleJob.interview
                  ? moment(singleJob.interview).format("MMM DD, YYYY")
                  : ""}
              </span>
            </h4>
            <h4>
              Offer:{" "}
              <span id="application-status">
                {singleJob.offer
                  ? moment(singleJob.offer).format("MMM DD, YYYY")
                  : ""}
              </span>
            </h4>
          </div>
        </div>
        <h2 id="contacts-title">Contacts</h2>
        <Link id="add-contact-button" to="/add-contact">
          +Add new contact
        </Link>
        <div id="contacts">
          {contacts.length ? (
            contactsList
          ) : (
            <h1 id="contacts-empty">No contacts added yet</h1>
          )}
        </div>
      </div>
    </main>
  );
};

export default JobDetail;
