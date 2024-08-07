import React from 'react';

const PastEventItem = ({ event }) => {
    return (
        <div className="flex flex-col items-center gap-4 justify-center md:w-96 sm:w-[340px] w-72 ">
            <img src={event.fields.projectImage.fields.file.url} alt="Event Logo" className="rounded-lg md:w-[22rem] sm:w-80 w-64 md:h-[22rem] sm:h-80 h-64 aspect-square object-cover" />
            <span className='font-semibold text-2xl text-white text-center border-2 p-4 rounded-full'>{event.fields.projectTitle}</span>
        </div>
    );
};

export default PastEventItem;
