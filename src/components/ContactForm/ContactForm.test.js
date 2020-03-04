import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { AuthContextProvider } from "../../context/AuthContext";
import { JobsContextProvider } from "../../context/JobsContext";
import { ContactsContextProvider } from "../../context/ContactsContext";
import { BrowserRouter } from "react-router-dom";
import ContactForm from "./ContactForm";

describe("ContactForm component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <JobsContextProvider>
          <ContactsContextProvider>
            <AuthContextProvider>
              <ContactForm />
            </AuthContextProvider>
          </ContactsContextProvider>
        </JobsContextProvider>
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
