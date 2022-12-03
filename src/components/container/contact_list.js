import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact ("Tony", "Vasquez", "tonyva002@hotmail.com", true);
    return (
        <div>
        <div><h1>Your contact</h1></div>

        <ContactComponent contact = {defaultContact}/>
            
        </div>
    );
}

export default ContactListComponent;
