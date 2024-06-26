import React, { useEffect, useState } from "react"; 

// Sample Use in Page
{/* <div className="flex w-full flex-col">
    <SectionHeader header={"Table Of Contents"} />
    <div className="flex w-full">
        <SupportTOC/>
    </div>
</div> */}


function SupportTOC() {
  return (
    <section id="table-of-contents" className="flex w-full xl:p-20 xl:px-40 lg:p-14 lg:px-20 sm:p-10 p-8 sm:px-20 bg-[#24453E] ">
        
        <div className="w-full flex flex-wrap gap-12 items-start justify-center">
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-56 sm:w-52 w-48">
                <a href="/">
                <img src={"/support-images/academic-support.png"} alt="Event Logo" className="md:w-48 sm:w-40 w-32 md:h-48 sm:h-40 h-32 aspect-square object-cover" />
                </a>
                <a href="/support/academics" className="relative group">
                    <span className='text-xl md:text-2xl text-white text-center'>Academic Support</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                </a>
            </div>
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-56 sm:w-52 w-48">
            <a href="/">
                <img src={"/support-images/financial-aid.png"} alt="Event Logo" className="md:w-48 sm:w-40 w-32 md:h-48 sm:h-40 h-32 aspect-square object-cover" />
                </a>
                <a href="/support/financial-aid" className="relative group">
                    <span className='text-xl md:text-2xl text-white text-center'>Financial Aid</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                </a>
            </div>
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-56 sm:w-52 w-48">
            <a href="/support/mental-health">
                <img src={"/support-images/mental-health.png"} alt="Event Logo" className="md:w-48 sm:w-40 w-32 md:h-48 sm:h-40 h-32 aspect-square object-cover" />
                </a>
                <a href="/" className="relative group">
                    <span className='text-xl md:text-2xl text-white text-center'>Mental Health</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                </a>
            </div>
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-56 sm:w-52 w-48">
            <a href="/student-welfare">
                <img src={"/support-images/student-welfare.png"} alt="Event Logo" className="md:w-48 sm:w-40 w-32 md:h-48 sm:h-40 h-32 aspect-square object-cover" />
                </a>
                <a href="/" className="relative group">
                    <span className='text-xl md:text-2xl text-white text-center'>Student Welfare</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                </a>
            </div>
            
        </div>

    </section>
  );
}

export default SupportTOC;
