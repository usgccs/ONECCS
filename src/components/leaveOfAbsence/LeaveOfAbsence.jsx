import React, { useEffect, useState } from "react";
import "./LeaveOfAbsence.css";

const LeaveOfAbsence = () => {

    return (
        <div className="loa__main_description p-8 lg:p-24">
            <br></br>
            <div className="loa__description">
                <p>A leave of absence, or LOA, refers to when a student files for a leave of <strong>one term up to a maximum of two terms. </strong> </p>
            </div>
            <div className="loa__description">
                <h2>Application Period</h2>
            </div>
            <div className="loa__description">
                <h3>For Term 3, AY 2023 - 2024 </h3>
                <br></br>
                <h3>April 01, 2024 to July 03, 2024 at 8 pm</h3>
            </div>
            <div className="loa__description">
                <h2>Before Applying</h2>
            </div>
            <div className="loa__description">
                <h4>▪ <strong>If the needed absence will only be for a day or week, see Excused Absence guidelines.</strong></h4>
                <h4>▪ <strong>If you are enrolled for the upcoming term and intend to apply for LOA, </strong>the student <u>must drop the course/s immediately</u> using Animo.sys account before the term starts to avoid charges/retention fees.</h4>
            </div>
            <div className="loa__description">
                <h2>Required Documents</h2>
            </div>
            <div className="loa__description">
                <h4>▪ Medical certificates with a clear contact number of attending physicians [with email validation from HSO and OCCS (for mental health concerns)] are required.</h4>
                <h4>▪ Consent letter and valid ID of the Declared Guardian.</h4>
                <h4>▪ Supporting Documents (if applicable only)</h4>
                <h4>▪ Clearance from the Office of Admissions and Scholarships (for OAS scholars only)</h4>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <button className="w-fit bg-[#24453E] text-white font-light m-4">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfKXexOQ5pXt4hlbPjQgzDrpaSQKjqca8rx816TtuWJj_9vFQ/viewform" className="white-link">UG/GS Application for Leave of Absence</a>
                </button>
            </div>
            <div className="loa__description">
                <h2>Application Procedure</h2>
            </div>
            <div className="loa__description">
                <h3>It is the responsibility of the student to ensure that all necessary forms and documents must be submitted. Thus, incomplete applications will not be processed.</h3>
                <br></br>
                <h4>1. Fill out the UG/GS Application for Leave of Absence Google Form and upload the necessary documents in the form.</h4>
                <h4>2. A copy of the Google form response will be sent to the student’s email as an acknowledgment receipt.</h4>
                <h4>3. Students who are currently enrolled/enlisted, will be dropped or withdrawn (whichever is applicable) from all enrolled courses depending on the date of submission, subject to appropriate fees.</h4>
                <h4>4. The application will be evaluated, and once deemed complete, the Office of the University Registrar (OUR) will process the LOA, as endorsements/approvals from other offices <strong>shall no longer be required.</strong> The applicant will be informed through email once the LOA is processed not later than four (4) working days <strong>upon submission of the application.</strong></h4>
            </div>
            <div className="loa__description">
                <h2>Important Notes or Reminders</h2>
            </div>
            <div className="loa__description">
                <h4>▪ Late requests will <u>not be entertained or accommodated.</u></h4>
                <h4>▪ It is the <strong>responsibility of the student</strong> to ensure that all necessary forms and/or documents must be submitted.</h4>
                <h4>▪ Students may be on LOA for a term or more, as there shall be <u>no limit to the number of terms a student may apply for LOA</u>.</h4>
                <h4>▪ <strong>Students who are recipients of scholarship grants</strong> should officially inform the DLSU Office of Admissions and Scholarships (OAS) in writing that they intend to take an LOA. Remember that taking an LOA is grounds for the termination of a scholarship grant unless special consideration due to meritorious cases is given by OAS. Please check the provisions in your Scholarship Guidelines related to the LOA stipulated <u><a href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/oas/scholarships/loa-provisions-for-scholars.pdf">here</a></u>.</h4>
            </div>
            <div className="loa__description">
                <h3>If you have questions, please send an email to <u><a href="mailto:registrar@dlsu.edu.ph">registrar@dlsu.edu.ph</a></u>. In sending an email, please use <strong>"1232: UG/GS Leave of Absence"</strong> as the subject line.</h3>
            </div>




        </div >
    );
};

export default LeaveOfAbsence;