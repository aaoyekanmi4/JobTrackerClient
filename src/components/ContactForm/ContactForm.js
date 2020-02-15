import React from "react";
import './ContactForm.css'
const ContactForm = () => {
  return (
    <form>
      <h1>Add/Edit Contact</h1>
      <label for="company"> Company Name</label>
      <input type="text" id="company" name="company" />
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />
      <label for="role">Role</label>
      <input type="text" id="role" name="role" />
      <label for="email">Email</label>
      <input type="email" id="email" name="email" />
      <label for="phone">Phone</label>
      <input type="tel" id="phone" name="phone" />
      <label for="last-contacted">Last Contacted</label>
      <input type="text" id="last-contacted" name="last-contacted" />
      <div class="button-holder">
        <input type="submit" value="Add Contact" />
      </div>
    </form>
  );
};

export default ContactForm;
