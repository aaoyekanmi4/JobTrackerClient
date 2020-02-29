import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import viewedJobs from '../../img/viewed_jobs.png';
import contacts from '../../img/contacts.png';
import calendar from '../../img/calendar.png';
const Landing = () => {
    return (
        <main>
           <h1 id="main-title">Job Tracker</h1>
        <section id="steps">
    
        <div className="step">
        <h2>Step 1: </h2>
      <img src={viewedJobs} alt="graphic design of man standing by lists with checkmarks"/>
      <p>Find jobs you are interested in and add their details to the site</p>
        </div>
        <div className="step">
        <h2>Step 2: </h2>
          <img src={contacts} alt="graphic design of people in boxes" />
          <p>Add contact information for people associated with the company</p>
        </div>
        <div className="step">
        <h2>Step 3: </h2>
        <img src={calendar} alt="graphic design of woman looking at calendar and posting events"/>
           <p>Set dates on your online calendar to follow-up on jobs</p>
        </div>
    </section>
       <div className="button-holder"><Link to="/jobs" id="get-started">Get Started</Link></div> 
    </main>
    )
}

export default Landing;
