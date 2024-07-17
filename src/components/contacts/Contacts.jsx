import React, { useEffect, useState } from "react";

function Contacts({ data }) {

    return (
        <section id="contact-persons" className="flex flex-col w-full xl:p-20 xl:px-20 lg:p-14 lg:px-20 sm:p-10 p-8 sm:px-20">
            <div className="w-full flex flex-wrap pb-12 items-center justify-center">
                {data && data.filter((person) => person.fields.lead == true).map((person, index) => (
                    <div key={index} className="flex flex-col items-center gap-2 justify-center md:w-96 sm:w-[340px] w-72">
                        <img src={person.fields.image ? person.fields.image.fields.file.url : '/contact-placeholder.jpg'} alt={person.fields.name + " Picture"} className="rounded-full md:w-64 sm:w-48 w-32 md:h-64 sm:h-48 h-32 aspect-square object-cover" />
                        <span className='font-semibold text-lg lg:text-2xl text-center text-[#24453E]'>{person.fields.name}</span>
                        <span className='font-semibold text-lg lg:text-xl text-center'>{person.fields.position}</span>
                        <span className='text-base lg:text-lg text-center'>{person.fields.email}</span>
                    </div>
                ))}
            </div>
            <div className="w-full flex flex-wrap gap-12 items-center justify-center">
                {data && data.filter((person) => person.fields.lead == false).map((person, index) => 
                    <div key={index} className="col-auto flex flex-col items-center gap-2 justify-center md:w-96 sm:w-[340px] w-72">
                        <img src={person.fields.image ? person.fields.image.fields.file.url : '/contact-placeholder.jpg'} alt={person.fields.name + " Picture"} className="rounded-full md:w-64 sm:w-48 w-32 md:h-64 sm:h-48 h-32 aspect-square object-cover" />
                        <span className='font-semibold text-lg lg:text-2xl text-center text-[#24453E]'>{person.fields.name}</span>
                        <span className='font-semibold text-lg lg:text-xl text-center'>{person.fields.position}</span>
                        <span className='text-base lg:text-lg text-center'>{person.fields.email}</span>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contacts;
