import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
const Landing = () => {
    return (
        <main>
           <h1>Job Tracker</h1>
        <section id="steps">
    
        <div className="step">
        <h2>Step 1: </h2>
           Fill out details of jobs you are interested in.
        </div>
        <div className="step">
        <h2>Step 2: </h2>
           Add contacts associated with company
        </div>
        <div className="step">
        <h2>Step 3: </h2>
           Set follow up dates to get back to contacts and check on applications
        </div>
    </section>
       <div className="button-holder"><Link to="/jobs" id="get-started">Get Started!</Link></div> 
    </main>
    )
}

export default Landing;
