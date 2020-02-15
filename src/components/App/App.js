import React from 'react';
import './App.css';


import ContactForm from '../ContactForm/ContactForm';
import Nav  from '../Nav/Nav';
import JobDetail from '../JobDetail/JobDetail';

function App() {
  return (
    <div className="App">
      <Nav />
      <ContactForm />
      <JobDetail />
     
    </div>
  );
}

export default App;
