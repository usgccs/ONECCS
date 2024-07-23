import React, { useEffect, useState } from "react";
import "./AppToGraduate.css";

const AppToGraduate = () => {

    return (
        <div className="atg__main_description p-8 lg:p-24">
            <div className="atg__description">
                <p><u>Students who are not absolutely certain</u> of their academic completion are likewise advised to complete the Application to Graduate and are further advised not to wait until the end of the term to apply.</p>
                <br></br>
                <p>Students who applied to graduate during the previous terms but have not yet completed their Application to Graduate need to re-apply this term to re-process their ATG.</p>
            </div>
            <div className="atg__description">
                <h2>Procedures and Schedules</h2>
            </div>
            <div className="atg__description">
                <h3>For procedures and schedules, kindly click on the following:</h3>
            </div>
            <div className="atg__description">
                <h2>Undergraduate Studies</h2>
            </div>
            <div className="atg__description">
                <h4><a className="break-words" href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/registrar/schedules/application-graduate-ug.pdf"><u>https://www.dlsu.edu.ph/wp-content/uploads/pdf/registrar/schedules/application-graduate-ug.pdf</u></a></h4>
            </div>
            <div className="atg__description">
                <h3><strong>Note:</strong> As the University’s CHED application to offer Minor Programs has been approved, the following students are requested to accomplish the Declaration of Minor Title in the ATG Google form to facilitate the evaluation of one’s minor title and be reflected on student records once approved:</h3>
            </div>
            <div className="atg__description">
                <h4>1. Students who completed the required Minor (with 12 units of required minor courses based on flowchart - MINOR01, MINOR02, MINOR03, MINOR04)</h4>
                <h4>2. Students who completed an Optional Minor (formerly called Free minor) with the required number of courses depending on the optional minor title</h4>
            </div>
            <div className="atg__description">
                <h2>Graduate Studies</h2>
            </div>
            <div className="atg__description">
                <h4>This Application to Graduate Form is only intended for Graduate students, and is not applicable for students in the Post Graduate (PGDM and TCP), Diploma Program, and Tañada-Diokno School of Law.</h4>
                <br></br>
                <h4><a className="break-words" href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/registrar/schedules/application-graduate-gs.pdf"><u>https://www.dlsu.edu.ph/wp-content/uploads/pdf/registrar/schedules/application-graduate-gs.pdf</u></a></h4>
            </div>
            <div className="atg__description">
                <h2>Other notes or reminders</h2>
            </div>
            <div className="atg__description">
                <h4>1. A graduating student who has a refund for the current term must accomplish this <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCtdDduh-CW2vkedgaVFMUb64p48KBHrGsTodhRSBGrnQVQA/closedform"><u>link</u></a> using their DLSU account to request a refund.</h4>
                <h4>2. For questions or concerns, please send an email to <a href="registrar@dlsu.edu.ph"><u>registrar@dlsu.edu.ph</u></a>. In sending an email, we highly encourage you to use the subject heading: <strong className="break-words">"XXXTH_CE_APPLICATION_TO_GRADUATE"</strong></h4>
            </div>

        </div >
    );
};

export default AppToGraduate;