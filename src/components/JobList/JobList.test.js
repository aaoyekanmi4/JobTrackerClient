import React from 'react';
import ReactDOM from 'react-dom';
import {AuthContextProvider} from '../../context/AuthContext';
import {JobsContextProvider} from '../../context/JobsContext';
import {ContactsContextProvider} from '../../context/ContactsContext'
import {BrowserRouter} from 'react-router-dom';
import JobList from './JobList';


describe('JobList component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <BrowserRouter>
        <JobsContextProvider>
        <ContactsContextProvider>
        <AuthContextProvider >
      <JobList />
      </AuthContextProvider>
      </ContactsContextProvider>
      </JobsContextProvider>
      </BrowserRouter>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});