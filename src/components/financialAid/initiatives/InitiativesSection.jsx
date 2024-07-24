import React, { useEffect, useState } from "react";
import InitiativeItem from "./InitiativesItem";

// Use in Page
{/* <div className="flex w-full flex-col">
    <SectionHeader header={"Initiatives"} />
    <div className="flex w-full">
    
    <InitiativesSection />
    </div>
</div> */}

function InitiativesSection({ data }) {



  return (
    <section id="past-events" className="flex w-full xl:p-20 xl:px-60 lg:p-14 lg:px-20 sm:p-10 p-8 sm:px-20 bg-[#24453E] ">
        
        <div className="w-full flex flex-wrap md:gap-16 gap-12 items-start justify-center">
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-96 sm:w-[340px] w-72">
                <img src={"/financialAid/extra-allowance.jpg"} alt="Event Logo" className="md:w-[22rem] sm:w-80 w-64 md:h-[22rem] sm:h-80 h-64 aspect-square object-cover" />
                <span className='font-semibold text-2xl text-white text-center'>Extra Allowance Program</span>
                <p className='text-white font-light text-justify'>
                The Extra Allowance Program provides financial assistance to Lasallians (ID 120 and above), aiming to support students in continuing their studies and covering their daily expenses at the university for one (1) term. This initiative provides financial support and aims to motivate students to excel academically.
                <br/><br/>                
                Application Period: March 18, 2024 - March 29, 2024.
                <br/><br/>                
                To apply, kindly fill out this form: <a href="https://bit.ly/EAPApplicationForm"><span className="underline underline-offset-4 text-white">https://bit.ly/EAPApplicationForm</span></a>
                <br/><br/> 
                Access the Primer here: <a href="https://bit.ly/EAPPrimer"><span className="underline underline-offset-4 text-white">https://bit.ly/EAPPrimer</span></a>
                </p>
            </div>
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-96 sm:w-[340px] w-72">
                <img src={"/financialAid/spa-grant.jpg"} alt="Event Logo" className="md:w-[22rem] sm:w-80 w-64 md:h-[22rem] sm:h-80 h-64 aspect-square object-cover" />
                <span className='font-semibold text-2xl text-white text-center'>Single Parent Assistance Grant</span>
                <p className='text-white font-light text-justify'>
                The Single Parent Assistance Grant (SP Grant) is a university-wide and institutionalized project that opens up another opportunity for Lasallians (122 and below), making the Office of the Executive Treasurer more inclusive and pro-student. The Single Parent Assistance Grant will welcome applicants for financial aid which aims to ease the financial struggles of Lasallian students raised by a single parent and are based in either the Manila or Laguna Campus. Fundamentally, this grant assists Lasallians to get the necessities to enjoy a decent way of living and have the most optimal education.
                <br/><br/> 
                Application Period: March 20 - March 24, 2023.
                <br/><br/> 
                To apply, kindly fill out this form: <a href="https://bit.ly/SPGrantApplicationForm"><span className="underline underline-offset-4 text-white">https://bit.ly/SPGrantApplicationForm</span></a>
                <br/><br/> 
                Access the Application Kit here: <a href="https://bit.ly/SPGrantApplicationKit"><span className="underline underline-offset-4 text-white">https://bit.ly/SPGrantApplicationKit</span></a></p>
            </div>
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-96 sm:w-[340px] w-72">
                <img src={"/financialAid/pwd-grant.jpg"} alt="Event Logo" className="md:w-[22rem] sm:w-80 w-64 md:h-[22rem] sm:h-80 h-64 aspect-square object-cover" />
                <span className='font-semibold text-2xl text-white text-center'>PWD Assistance Grant</span>
                <p className='text-white font-light text-justify'>
                The PWD Assistance Grant is a university-wide and institutionalized project of the Office of the Executive Treasurer which aims to provide financial assistance to students (122 and below) with physical and mental disabilities that require financial support. Given that most existing financial programs can only support a small number of PWDs and involve multiple formalities that might impede timely access to financial aid, this assistance grant will make Lasallian education more accessible to all and aid them to reach their full potential as Lasallian students.
                <br/><br/> 
                Application Period: March 20 - March 24, 2023.
                <br/><br/> 
                To apply, kindly fill out this form: <a href="https://bit.ly/PWDGrantApplicationForm "><span className="underline underline-offset-4 text-white">https://bit.ly/PWDGrantApplicationForm </span></a>
                <br/><br/> 
                Access the Application Kit here: <a href="https://bit.ly/PWDGrantApplicationKit"><span className="underline underline-offset-4 text-white">https://bit.ly/PWDGrantApplicationKit</span></a>
                </p>
            </div>
        </div>
    </section>
  );
}

export default InitiativesSection;
