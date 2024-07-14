import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";

function HomeTOC() {
  return (
    <section id="table-of-contents" className="flex flex-col gap-10 w-full xl:p-20 xl:px-40 lg:p-14 lg:px-20 sm:p-10 p-8 sm:px-20 bg-white ">
        <div id="help-section" className="w-full text-center justify-center">
            <p>
                <span className="text-6xl font-bold text-black">How can we help you?</span>
            </p>
        </div>

        <div className="w-full flex flex-wrap gap-12 items-start justify-center">
            
            
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-56 sm:w-52 w-48">
                <Link to="/about-us">
                    <img src={"https://res.cloudinary.com/dnlrbmzns/image/upload/v1720438761/aboutus_p2qy6u.png"} alt="Event Logo" className="md:w-48 sm:w-40 w-32 md:h-48 sm:h-40 h-32 aspect-square object-cover" />
                </Link>
                <Link to="/about-us" className="relative group">
                    <span className='text-xl md:text-2xl text-black text-center'>About Us</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                </Link>
            </div>
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-56 sm:w-52 w-48">
            <Link to="/student-services">
                <img src={"https://res.cloudinary.com/dnlrbmzns/image/upload/v1720438761/studentservices_wz4ghz.png"} alt="Event Logo" className="md:w-48 sm:w-40 w-32 md:h-48 sm:h-40 h-32 aspect-square object-cover" />
                </Link>
                <Link to="/support/financial-aid" className="relative group">
                    <span className='text-xl md:text-2xl text-black text-center'>Student Services</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                </Link>
            </div>
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-56 sm:w-52 w-48">
            <Link to="/support">
                <img src={"https://res.cloudinary.com/dnlrbmzns/image/upload/v1720438761/support_qjjiwx.png"} alt="Event Logo" className="md:w-48 sm:w-40 w-32 md:h-48 sm:h-40 h-32 aspect-square object-cover" />
                </Link>
                <Link to="/support" className="relative group">
                    <span className='text-xl md:text-2xl text-black text-center'>Support</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                </Link>
            </div>
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-56 sm:w-52 w-48">
            <Link to="/opportunities">
                <img src={"https://res.cloudinary.com/dnlrbmzns/image/upload/v1720438761/opportunities_mj8gpd.png"} alt="Event Logo" className="md:w-48 sm:w-40 w-32 md:h-48 sm:h-40 h-32 aspect-square object-cover" />
                </Link>
                <Link to="/opportunities" className="relative group">
                    <span className='text-xl md:text-2xl text-black text-center'>Opportunities</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                </Link>
            </div>
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-56 sm:w-52 w-48">
            <Link to="/career-hub">
                <img src={"https://res.cloudinary.com/dnlrbmzns/image/upload/v1720438761/careerhub_pmdeol.png"} alt="Event Logo" className="md:w-48 sm:w-40 w-32 md:h-48 sm:h-40 h-32 aspect-square object-cover" />
                </Link>
                <Link to="/career-hub" className="relative group">
                    <span className='text-xl md:text-2xl text-black text-center'>Career Hub</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-[#24453E] group-hover:w-1/2 group-hover:transition-all"></span>
                </Link>
            </div>
            
        </div>

    </section>
  );
}

export default HomeTOC;
