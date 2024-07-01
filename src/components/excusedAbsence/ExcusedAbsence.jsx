import React, { useEffect, useState } from "react";
import "./ExcusedAbsence.css";

const ExcusedAbsence = () => {

    return (
        <div className="ea__main_description p-8 lg:p-24">
            <br></br>
            <div className="ea__description">
                <p>The Associate Deans process ONLY requests for approved absence due to <u>medical and mental health reasons</u>. Please refer to the information below to learn more about the updated guidelines.</p>
            </div>
            <div className="ea__description">
                <p>You may request an excuse letter by clicking the button below..</p>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <button className="w-fit bg-[#24453E] text-white font-light">
                    <a href="http://bit.ly/CCSExcusedAbsence" className="white-link">CCS Request for Letter of Excused Absence</a>
                </button>
            </div>
            <br></br>
            <div className="ea__description">
                <h3><strong>You don’t fall under medical and health reasons?</strong> (that requires supporting documents)</h3>
                <br></br>
                <h3>Read the guidelines under <strong>special cases.</strong></h3>
            </div>
            <div className="ea__description">
                <h2>Application Procedure</h2>
            </div>
            <div className="ea__description">
                <h4>1. Start processing your request within <u>seven (7) working days</u> from the day you return to your classes.</h4>
                <h4>2. Submit to the Associate Dean the list of your course, sections, names of faculty members, and dates of absences, together with the supporting documents.</h4>
                <h5><strong>Note:</strong> Only complete or compliant requests will be entertained or processed. Colleges may have different procedures for submitting these documents.</h5>
                <h4>3. After receiving your signed approved absence from the Associate Dean, submit it <u>within three (3) working days</u> to the faculty members handling the course.</h4>
            </div>
            <div className="ea__description">
                <h2>Supporting documents</h2>
            </div>
            <div className="ea__description">
                <h3>The following documents are required to be submitted in the request form:</h3>
            </div>
            <div className="ea__description">
                <h6>For medical reasons</h6>
            </div>
            <div className="ea__description">
                <h5>1. Present your medical certificate to the Health Services Office (HSO) to secure an endorsement by emailing <a href="mailto:clinic@dlsu.edu.ph"><u>clinic@dlsu.edu.ph</u></a> within <u>seven (7) working days</u> from the day you return to your classes.</h5>
                <h5><strong>Note:</strong> HSO usually responds within three (3) working days. If you are still waiting to receive a response during that period, follow up in the same email thread.</h5>
                <h5>2. Once you receive your endorsement from HSO, upload it to the Google Form.</h5>
            </div>
            <div className="ea__description">
                <h6>For mental health reasons</h6>
            </div>
            <div className="ea__description">
                <h5>1. Schedule an appointment with the Office of Counseling and Career Services (OCCS) by emailing <a href="mailto: occs@dlsu.edu.ph"><u>occs@dlsu.edu.ph</u></a> as soon as you return to campus and <u>not later than seven working days</u> from the day you return to your classes.</h5>
                <h5><strong>Note:</strong> OCCS usually responds within three (3) working days. If you are still waiting to receive a response during that period, follow up in the same email thread.</h5>
                <h5>2. Once you receive your endorsement from OCCS, upload it to the Google Form.</h5>
            </div>
            <div className="ea__description">
                <h6>For official functions</h6>
            </div>
            <div className="ea__description">
                <h5>Check with the Office of Student Affairs (OSA) for procedures in the Help Desk Announcement.</h5>
                <h5>Email Subject: <strong>[DSA] Approved Absence Form</strong></h5>
            </div>
            <div className="ea__description">
                <h2>Special Cases</h2>
            </div>
            <div className="ea__description">
                <h3>You must submit <u>directly to the concerned faculty member or professor</u> for the following special cases:</h3>
            </div>
            <div className="ea__description">
                <h4>▪ Death of an immediate family member</h4>
                <h4>▪ Emergencies</h4>
                <h4>▪ Caregiving sick family members</h4>
                <h4>▪ Connectivity issues</h4>
                <h4>▪ Sickness that <u>does not require</u> a medical certificate</h4>
                <h4>▪ Delayed submission for course requirements</h4>
                <h4>▪ Other special cases not mentioned above</h4>
            </div>
            <div className="ea__description">
                <h3>The faculty member or professor will decide if you can be excused. <strong>There is no need to get an endorsement from the associate dean if you fall under these special cases.</strong></h3>
            </div>
            <div className="ea__description">
                <h2>Important Notes</h2>
            </div>
            <div className="ea__description">
                <h4>▪ Falsifying documents is a major violation.</h4>
                <h4>▪ Refer to the Student Handbook, SECTION 9: ATTENDANCE, pp. 85-87, for complete attendance details.</h4>
            </div>

        </div >
    );
};

export default ExcusedAbsence;