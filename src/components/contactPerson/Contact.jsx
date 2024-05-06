import React, { useEffect, useState } from "react";
import "./Contact.css";

const ContactPerson = ({ contactName, contactPosition, contactEmail, contactNumber, imageUrl }) => {
    return (
        <div className="contact-person">
            <div className="contact-picture">
                <img src={imageUrl} alt={contactName} />
            </div>
            <div className="contact-details">
                <h2>{contactName}</h2>
                <h3>{contactPosition}</h3>
                <br></br>
                <p>{contactEmail}</p>
                <p>{contactNumber}</p>
            </div>
        </div>
    );
};

export default ContactPerson;