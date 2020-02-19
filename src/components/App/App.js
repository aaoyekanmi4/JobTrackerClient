import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import ContactForm from '../ContactForm/ContactForm';
import Nav  from '../Nav/Nav';
import JobDetail from '../JobDetail/JobDetail';
import JobList from '../JobList/JobList';
import JobForm from '../JobForm/JobForm';
import Landing from '../Landing/Landing';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

function App() {
  return (
   
    <div className="App">
      <Nav />
      <Switch >
       <Route path="/add-contact">
      <ContactForm />
       </Route> 
       <Route path="/job-detail">
      <JobDetail />
      </Route>
      <Route path="/jobs">
      <JobList />
      </Route>
      <Route exact path="/">
      <Landing />
      </Route>
      <Route path="/login">
      <Login />
      </Route>
      <Route path="/sign-up">
      <SignUp />
      </Route>
      <Route path="/add-job">
      <JobForm />
      </Route>
      </Switch>

    </div>
  );
}

export default App;
