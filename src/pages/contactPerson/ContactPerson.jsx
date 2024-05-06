// import React, { useEffect, useState } from "react";
// import Contact from "../../components/contactPerson/Contact";

// const ContactPerson = (
//     { contactName, contactPosition, contactEmail, contactNumber, imageUrl }) => {
    
//         useEffect(() => {
//         console.log("ContactPerson component updated.");
//     }, [contactName, contactPosition, contactEmail, contactNumber, imageUrl]);

//     return (
//         <div className="contact">
//             <img src={imageUrl} alt={contactName} />
//             <div className="contact-details">
//                 <h2>{contactName}</h2>
//                 <p>{contactPosition}</p>
//                 <p>{contactEmail}</p>
//                 <p>{contactNumber}</p>
//             </div>
//         </div>
//     );
// };

// export default ContactPerson;

import React, { useEffect, useState } from "react";
import Contact from "../../components/contactPerson/Contact";

const ContactPerson = () => {
    const [contacts, setContacts] = useState([]);

    // Sample contact data
    useEffect(() => {
        setContacts([
            {
                contactName: "John Doe",
                contactPosition: "Software Engineer",
                contactEmail: "john@example.com",
                contactNumber: "123-456-7890",
                imageUrl: "https://example.com/john.jpg"
            },
            {
                contactName: "Jane Smith",
                contactPosition: "Product Manager",
                contactEmail: "jane@example.com",
                contactNumber: "987-654-3210",
                imageUrl: "https://example.com/jane.jpg"
            },
            // Add more sample contacts as needed
        ]);
    }, []);

    useEffect(() => {
        console.log("ContactPerson component updated.");
    }, [contacts]);

    return (
        <div className="contact-list">
            {contacts.map((contact, index) => (
                <Contact
                    key={index}
                    contactName={contact.contactName}
                    contactPosition={contact.contactPosition}
                    contactEmail={contact.contactEmail}
                    contactNumber={contact.contactNumber}
                    imageUrl={contact.imageUrl}
                />
            ))}
        </div>
    );
};

export default ContactPerson;

