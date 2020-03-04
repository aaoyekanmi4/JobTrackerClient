import React from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { JobsContextProvider } from "../../context/JobsContext";
import { ContactsContextProvider } from "../../context/ContactsContext";
import { BrowserRouter } from "react-router-dom";
import JobDetail from "./JobDetail";

describe("JobDetail component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <JobsContextProvider>
          <ContactsContextProvider>
            <AuthContextProvider>
              <JobDetail />
            </AuthContextProvider>
          </ContactsContextProvider>
        </JobsContextProvider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
