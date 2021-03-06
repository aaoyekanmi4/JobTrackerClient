import React, { useState } from "react";
import TokenService from "../services/TokenService";
import { API_BASE_URL } from "../config";
import { useHistory } from "react-router-dom";

const ContactsContext = React.createContext();

const ContactsContextProvider = props => {
  const history = useHistory();
  const [contacts, setContacts] = useState([]);
  const [singleContact, setSingleContact] = useState("");
  const [contactsError, setContactsError] = useState("");

  const getAllContacts = jobId => {
    fetch(`${API_BASE_URL}/api/contacts/job/${jobId}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        return response.json();
      })
      .then(responseJSON => setContacts(responseJSON))
      .catch(res => setContactsError(res.error));
  };
  const getContactById = id => {
    fetch(`${API_BASE_URL}/api/contacts/${id}`, {
      headers: { authorization: `bearer ${TokenService.getAuthToken()}` }
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        return response.json();
      })
      .then(contact => {
        for (let [key, value] of Object.entries(contact)) {
          //set null values to empty string for controlled forms
          if (value === null) {
            contact[key] = "";
          }
        }

        setSingleContact(contact);
      })
      .catch(res => setContactsError(res.error));
  };

  const addContact = (contact, jobId) => {
    for (let [key, value] of Object.entries(contact)) {
      //change empty strings to null for backend database
      if (value === "") {
        contact[key] = null;
      }
    }

    fetch(`${API_BASE_URL}/api/contacts/job/${jobId}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(contact)
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        history.push(`/job-detail/${jobId}`);
        return response.json();
      })
      .catch(res => setContactsError(res.error));
  };
  const editContact = (contact, jobId) => {
    for (let [key, value] of Object.entries(contact)) {
      if (value === "") {
        contact[key] = null;
      }
    }
    fetch(`${API_BASE_URL}/api/contacts/${contact.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(contact)
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        history.push(`/job-detail/${jobId}`);
        getContactById(contact.id);
      })

      .catch(res => setContactsError(res.error));
  };
  const deleteContact = id => {
    fetch(`${API_BASE_URL}/api/contacts/${id}`, {
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
        setContacts(prevContacts =>
          prevContacts.filter(contact => contact.id !== id)
        );
        return response.json();
      })
      .catch(res => setContactsError(res.error));
  };
  return (
    <ContactsContext.Provider
      value={{
        contacts,
        deleteContact,
        editContact,
        getAllContacts,
        singleContact,
        getContactById,
        addContact,
        contactsError
      }}
    >
      {props.children}
    </ContactsContext.Provider>
  );
};
export { ContactsContextProvider, ContactsContext };
