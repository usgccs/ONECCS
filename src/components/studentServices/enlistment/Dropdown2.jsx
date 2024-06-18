import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const Dropdown2 = () => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="flex flex-col items-center min-h-screen p-10">
            <div className="w-full">
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
                    <p className="text-xl">(2) Enlistment Steps</p>
                    {showDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                <hr className="my-4" />
                {showDropdown && (
                    <div className="dropdown-info space-y-4">
                        <p className="text-center">
                            <b>Before Enlistment</b>
                        </p>
                        <p>
                            <b>STEP 1:</b> Participate in the pre-enlistment period. This way, you are sure that you are not taking someone else's slot when you enlist for a class.
                        </p>
                        <p>
                            <b>STEP 2:</b> On your MyLaSalle Account, click on "View Clearance". Make sure that you have no pending clearances from the different offices. 
                        </p>
                        <p>
                            <b>STEP 3:</b> Plan your schedule. You may visit the course offerings through this link: 
                            <a className="break-words" href="https://enroll.dlsu.edu.ph/dlsu/view_course_offerings" target="_blank" rel="noopener noreferrer"> https://enroll.dlsu.edu.ph/dlsu/view_course_offerings</a>. 
                        </p>
                        <p>
                            <b>STEP 4:</b> Log into your Animo.sys account. Click on {"Self-Service > Enrollment > Enrollment: Add Classes"}.
                        </p>
                        <p>
                            <b>STEP 5:</b> You will be asked to enter a class number in your cart. The class codes can be found on the course offerings page mentioned above.
                        </p>
                        <p>
                            <b>STEP 6:</b> Once you have entered the class number of your desired section, click "Enter", then click "Next". Repeat this for your other classes by clicking on "Add Another Class".
                        </p>
                        <p>
                            <b>STEP 7:</b> After you have added all your desired classes, wait for your enlistment schedule.
                        </p>

                        <p className="text-center">
                            <b>During Enlistment</b>
                        </p>

                        <p>
                            <b>STEP 1:</b> On your enlistment date, it is highly suggested to <b>log in to your Animo.sys account early.</b>
                        </p>
                        <p>
                            <b>STEP 2:</b> Once it is your time to enlist, ensure that all your classes are still available. Then, click "Proceed to Steps 2 of 3" and then, "Finish Enrolling".
                        </p>
                        <p>
                            <b>STEP 3:</b> You will be led to a final screen showing all your successfully enlisted classes.
                        </p>
                        <p>
                            <b>STEP 4:</b> During the enlistment period, you will still be given the option to add, swap, and drop classes. You can find these under the enrollment tab in Animo.sys. 
                        </p>
                        <p>
                            <b>STEP 5:</b> Dropping of classes is still 100% refundable on the first week, 90% on the second, and 80% on the third week. Classes will not be refundable after the third week.
                        </p>

                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown2;
