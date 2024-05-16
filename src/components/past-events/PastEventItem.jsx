import React from 'react';

const PastEventItem = ({ event }) => {
    return (
        <div className="flex flex-col items-center">
            <img src={event.fields.projectImage.fields.file.url} alt="Event Logo" className="md:w-[22rem] md:h-[22rem] sm:w-80 sm:h-80 w-64 h-64 aspect-square object-cover rounded-2xl" />
            <span className='font-semibold text-2xl text-white text-center mt-5'>{event.fields.projectTitle}</span>
        </div>
    );
};

export default PastEventItem;
