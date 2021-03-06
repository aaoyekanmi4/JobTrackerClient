import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ContactForm from "../ContactForm/ContactForm";
import Nav from "../Nav/Nav";
import JobDetail from "../JobDetail/JobDetail";
import JobList from "../JobList/JobList";
import JobForm from "../JobForm/JobForm";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/add-contact">
          <ContactForm />
        </Route>
        <Route
          path="/job-detail/:job_id"
          render={({ match }) => <JobDetail jobId={match.params.job_id} />}
        />

        <PrivateRoute path="/jobs">
          <JobList />
        </PrivateRoute>
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
        <Route
          path="/edit-job/:job_id"
          render={({ match }) => <JobForm jobId={match.params.job_id} />}
        />
        <Route
          path="/edit-contact/:contact_id"
          render={({ match }) => (
            <ContactForm contactId={match.params.contact_id} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
