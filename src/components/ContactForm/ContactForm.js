import React, {useState, useContext, useEffect} from "react";
import{ ContactsContext } from '../../context/ContactsContext';
import { JobsContext } from '../../context/JobsContext';
import { useHistory } from 'react-router-dom';
import './ContactForm.css'
const ContactForm = (props) => {
  const history = useHistory();
  const {singleJob} = useContext(JobsContext);
  const { addContact, singleContact, editContact} = useContext(ContactsContext);
  const [contactEntry, setContactEntry] = useState({ 
     name:'',
     role:'',
     email:'',
     phone:'',
     contact_url:'',
     last_contacted:'',
     job_id:singleJob.id
  })
 //set value of contactEntry if there is an id for a contactto edit in props 
 useEffect(()=> {
   
  const id = Number(props.contactId);
  if(singleContact.id===id){

    setContactEntry(prevState => {return {...prevState, ...singleContact}})
  }
  // eslint-disable-next-line
}, [])
  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setContactEntry(prevState =>{
    return {...prevState, [name]:value}
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    //edit if there is an id, just create new contact if not
 if (props.contactId){
  
   editContact(contactEntry)
 }
 else {
  addContact(contactEntry, singleJob.id);
 }
  
   
    history.push('/jobs')
  };
  return (

    <form onSubmit={handleSubmit}>
      <h1>Add/Edit Contact at {singleJob.company}</h1>
    
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name"value={contactEntry.name} onChange={handleChange} />
      <label htmlFor="role">Role</label>
      <input type="text" id="role" name="role"  value={contactEntry.role} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email"    value={contactEntry.email}onChange={handleChange} />
      <label htmlFor="phone">Phone</label>
      <input type="tel" id="phone" name="phone"  value={contactEntry.phone} onChange={handleChange} />
      <label htmlFor="contact_url">contactURL</label>
      <input type="text" id="contact_url" name="contact_url" value={contactEntry.contact_url} onChange={handleChange} />
      <label htmlFor="last_contacted">Last Contacted</label>
      <input type="date" id="last_contacted" name="last_contacted" value={contactEntry.last_contacted} onChange={handleChange} />
      <div className="button-holder">
        <input type="submit" value="Add Contact" />
      </div>
    </form>
  );
};

export default ContactForm;
