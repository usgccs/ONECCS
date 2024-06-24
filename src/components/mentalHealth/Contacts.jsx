import React from 'react';

const Contacts = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-20">
      <div className="max-w-screen-lg w-full">
        <img
          src="https://res.cloudinary.com/dnlrbmzns/image/upload/v1719229101/mentalhealth_mh5n1y.png"
          alt="Mental Health"
          className="w-full h-auto object-cover rounded-lg"
          style={{ maxHeight: '500px' }} // Adjust the max height as needed
        />
      </div>
    </div>
  );
}

export default Contacts;
