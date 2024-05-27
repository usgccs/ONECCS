import React, { useEffect, useState } from "react";
import "./AppCredit.css";

const AppCredit = () => {

    return (
        <div className="ac__main_description">
            <div className="ac__description">
                <p>Submit an application through the Google form of their respective college/school:</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <button className="w-96 bg-[#24453E] text-white font-light m-4">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJ11ZZHV4WOR6r4p8Muy5LYOLr95J7EqDpvFfKe7uxh6-PSQ/viewform" className="white-link">Course Crediting for CCS</a>
                </button>
            </div>
            <div className="ac__description">
                <h2>Reminders</h2>
            </div>
            <br></br>
            <div className="ac__description">
                <h4>▪ For courses taken outside of DLSU, the student must upload an official copy of grades/ Transcript of Records.</h4>
                <h4>▪ The student’s application will be shared with the Department (if applicable) and with the Associate Dean of the student for their endorsement/approval.</h4>
                <h4>▪ OUR will evaluate the application only when it has been approved by Department/College/School.</h4>
                <h4>▪ Student will receive an email on the status of the application not later than 2 weeks after submission.</h4>
            </div>
            <br></br>
            <div className="ac__description">
                <h3>For any clarifications or concerns, please send an email to <a href="mailto:registrar@dlsu.edu.ph"><u>registrar@dlsu.edu.ph</u></a></h3>
            </div>

        </div >
    );
};

export default AppCredit;