import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import {JobsContextProvider } from './context/JobsContext';
import { ContactsContextProvider} from './context/ContactsContext';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
  <BrowserRouter>
  <AuthContextProvider>
  <JobsContextProvider>
    <ContactsContextProvider>
    <App />
    </ContactsContextProvider>
    </JobsContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
