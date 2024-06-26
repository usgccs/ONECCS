import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const Dropdown1 = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="flex flex-col items-center px-4">
            <div className="w-full">
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
                    <p className="text-xl">(1) Pre-Enlistment</p>
                    {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <hr className="my-4" />
                {showDropdown && (
                    <div className="dropdown-info space-y-4 mb-6">
                        <p>
                            <b>Pre-enlistment gives the admin an idea of how many students will enlist in a class,</b> helping them to estimate how many sections they will open for the Enlistment period. Students are usually given a week to pre-enlist - this is enough time for everyone to add courses to enlist in the Animo.sys website.
                        </p>
                        <p>
                            <b>STEP 1:</b> Visit the Animosys.website (http://animo.sys.dlsu.edu.ph).
                        </p>
                        <p>
                            <b>STEP 2:</b> Click "Self Service".
                        </p>
                        <p>
                            <b>STEP 3:</b> Click "Course Enlistment".
                        </p>
                        <p>
                            <b>STEP 4:</b> Click "Add Course to Enlist".
                        </p>
                        <p>
                            <b>STEP 5:</b> Input the courses you will be taking in the next term. Refer to your flowchart <u>here</u> (access Google Drive with your DLSU email).
                        </p>
                        <div className="list-decimal list-inside pl-4 space-y-4">
                            <li className="mt-2">Click on the "Lookup Course ID" icon</li>
                            <li>In the Look Up pop-up window, specify the course code you want to enlist in:</li>
                            <li className="mb-4">
                                For Undergraduate students, type the first two characters of the course code in the 'Subject Area' textbox, then type the last five characters of the course code in the 'Catalog Nbr' textbox.
                                <div className="list-disc list-inside pl-4">
                                    <li className="mt-2">For Undergraduate students, type the first two characters of the course code in the 'Subject Area' textbox, then type the last five characters the course code in the 'Catalog Nbr' textbox.</li>
                                    <p className="mt-2 ml-8">EX. Subject Area: CC <br /> Catalog Nbr: PROG1</p>
                                    <li className="mt-2">For Graduate students, type the first three characters of the course code in the 'Subject Area' textbox, then type the last four characters of the course code in the 'Catalog Nbr' textbox.</li>
                                </div>
                            </li>
                            <li>Click the 'Look Up' button to display the Search Results.</li>
                            <li>Click on the course that you want to enlist in.</li>
                            <li>If you need to enlist in additional courses, click on the plus (+) icon. Repeat steps 1-4.</li>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown1;
