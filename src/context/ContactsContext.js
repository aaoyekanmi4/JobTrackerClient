import React, { useState } from "react";
import TokenService from '../services/TokenService';
const ContactsContext = React.createContext();

const ContactsContextProvider = props => {
  const [contacts, setContacts] = useState([]);
  const [singleContact, setSingleContact] = useState('');
  const [contactsError, setContactsError] = useState("");

  const getAllContacts = (jobId) => {
    fetch(`http://localhost:8000/api/contacts/job/${jobId}`, {
      headers:{'authorization': `bearer ${TokenService.getAuthToken()}`}
    } 
    )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(responseJSON => setContacts(responseJSON))
      .catch(err => setContactsError(err));
  };
  const getContactById=(id)=> {
    fetch(`http://localhost:8000/api/contacts/${id}`, {
        headers:{'authorization': `bearer ${TokenService.getAuthToken()}`}
      } 
      )
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(contact=> 
        {
          for (let [key, value] of Object.entries(contact)){
            if (value ===null){
              contact[key]='';
            }
          }
          setSingleContact(contact)
        })
      .catch(err => setContactsError(err))
  }
  
  const addContact =(contact, jobId)=> {
      
    for (let [key, value] of Object.entries(contact)){
      if (value ===''){
        contact[key]=null;
      }
    }
    console.log(contact);
    fetch(`http://localhost:8000/api/contacts/job/${jobId}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(contact)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(err => setContactsError(err))
  }
  const editContact = (contact) => {
    for (let [key, value] of Object.entries(contact)){
      if (value ===''){
        contact[key]=null;
      }
    }
    fetch(`http://localhost:8000/api/contacts/${contact.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(contact)
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      getContactById(contact.id)
    })
    .then(contact => {
      getAllContacts();
    })
    .catch(err => setContactsError(err))
  }
  const deleteContact = (id) => {
    fetch(`http://localhost:8000/api/contacts/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json', 
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }})
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).catch(err => setContactsError(err))
  }
  return (
    <ContactsContext.Provider value={{ contacts,deleteContact, editContact, getAllContacts, singleContact, getContactById,addContact, contactsError }}>
      {props.children}
    </ContactsContext.Provider>
  );
};
export { ContactsContextProvider, ContactsContext};