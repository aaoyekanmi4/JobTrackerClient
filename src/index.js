import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import {JobsContextProvider } from './context/JobsContext';

ReactDOM.render(
  <BrowserRouter>
  <JobsContextProvider>
    <App />
    </JobsContextProvider>
  </BrowserRouter>
  ,
  document.getElementById("root")
);
