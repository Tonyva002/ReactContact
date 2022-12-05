import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact, update, remove }) => {

    function contactUpdateIcon(){
        if(contact.conect){
            return <i onClick={() => update(contact)} className="bi-toggle-on task-action" style={{color: "green"}}></i>;
        }else {
            return <i onClick={() => update(contact)} className="bi-toggle-off task-action" style={{color: "grey"}}></i>;
        }
    }


  return (
    <tr className="fw-normal align-middle">
      <td>
        <span>{contact.name}</span>
      </td>

      <td>
        <span>{contact.lastname}</span>
      </td>
      
      <td>
        <span>{contact.phone}</span>
      </td>

      <td>
        <span>{contact.email}</span>
      </td>
      
      <td>
        {contactUpdateIcon()}
      </td>

      <td>
        <i className="bi-trash task-action" style={{color: "tomato"}} onClick={() => remove(contact)}></i>
      </td>
      
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired
};

export default ContactComponent;
