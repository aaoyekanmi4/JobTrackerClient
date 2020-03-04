import React from "react";
import ReactDOM from "react-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { JobsContextProvider } from "../../context/JobsContext";
import { ContactsContextProvider } from "../../context/ContactsContext";
import { BrowserRouter } from "react-router-dom";
import JobForm from "./JobForm";

describe("JobForm component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <JobsContextProvider>
          <ContactsContextProvider>
            <AuthContextProvider>
              <JobForm />
            </AuthContextProvider>
          </ContactsContextProvider>
        </JobsContextProvider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
