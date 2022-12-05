import React, { useState } from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";
import ContactForm from "../pure/forms/contactForm";

const ContactListComponent = () => {
  const defaultContact1 = new Contact(
    "Tony",
    "Vasquez",
    "849-342-5632",
    "tonyva002@hotmail.com",
    true
  );

  const defaultContact2 = new Contact(
    "Ana",
    "Solano",
    "502-653-2384",
    "ana@hotmail.com",
    false
  );

  const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);


  function updateContact(contact){
    console.log('Update this contact:', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].conect = !tempContacts[index].conect;
    setContacts(tempContacts);
  }

  function removeContact(contact){
    console.log('Delete this contact:', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index,1);
    setContacts(tempContacts);

  }

  function addContact(contact){
    console.log('Add this contact:', contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);

  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/*Card Header (title)*/}
          <div className="card-header p-3">
            <h5>Contact list</h5>
          </div>
          {/*Card body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Email</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => {
                  return <ContactComponent 
                  key={index} 
                  contact={contact}
                  update={updateContact}
                  remove={removeContact} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <ContactForm add={addContact} />
    </div>
  );
};

export default ContactListComponent;
