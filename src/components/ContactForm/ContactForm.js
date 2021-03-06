import React, { useState, useContext, useEffect } from "react";
import { ContactsContext } from "../../context/ContactsContext";
import { JobsContext } from "../../context/JobsContext";

import "./ContactForm.css";
const ContactForm = props => {

  const { singleJob } = useContext(JobsContext);
  const { addContact, contacts, editContact, contactError } = useContext(
    ContactsContext
  );
  const [contactEntry, setContactEntry] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    contact_url: "",
    last_contacted: "",
    job_id: singleJob.id
  });
  //set value of contactEntry if there is an id for a contactto edit in props
  useEffect(() => {
    if (props.contactId) {
      const contactToUpdate = contacts.find(
        contact => contact.id == props.contactId
      );

      setContactEntry(prevState => {
        return { ...prevState, ...contactToUpdate };
      });
    }
    // eslint-disable-next-line
  }, []);
  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setContactEntry(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    //edit if there is an id, just create new contact if not
    if (props.contactId) {
      editContact(contactEntry, singleJob.id);
    } else {
      addContact(contactEntry, singleJob.id);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {contactError && <p className="error">{contactError}</p>}
      <p>Required *</p>
      <h1>{props.contactId ? `Edit Contact at ${singleJob.company}` : `Add Contact at ${singleJob.company}`}</h1>

      <label className="form-label" htmlFor="name">
        Name *
      </label>
      <input
        className="form-input"
        type="text"
        id="name"
        name="name"
        value={contactEntry.name}
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="role">
        Role *
      </label>
      <input
        className="form-input"
        type="text"
        id="role"
        name="role"
        value={contactEntry.role}
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="email">
        Email
      </label>
      <input
        className="form-input"
        type="email"
        id="email"
        name="email"
        value={contactEntry.email}
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="phone">
        Phone
      </label>
      <input
        className="form-input"
        type="tel"
        id="phone"
        name="phone"
        value={contactEntry.phone}
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="contact_url">
        contactURL
      </label>
      <input
        className="form-input"
        type="text"
        id="contact_url"
        name="contact_url"
        value={contactEntry.contact_url}
        onChange={handleChange}
      />
      <label className="form-label" htmlFor="last_contacted">
        Last Contacted
      </label>
      <input
        className="form-input"
        type="date"
        id="last_contacted"
        name="last_contacted"
        value={contactEntry.last_contacted}
        onChange={handleChange}
      />
      <div className="form-submit-button button-holder">
        <input type="submit" value={props.contactId ? 'Edit Contact' :
      'Add Contact'} />
      </div>
    </form>
  );
};

export default ContactForm;
