import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import {JobsContextProvider } from './context/JobsContext';
import { ContactsContextProvider} from './context/ContactsContext';

ReactDOM.render(
  <BrowserRouter>
  <JobsContextProvider>
    <ContactsContextProvider>
    <App />
    </ContactsContextProvider>
    </JobsContextProvider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
