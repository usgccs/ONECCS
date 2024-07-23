import React, { useEffect, useState } from "react";
import "./ShiftingProcesses.css";

const ShiftingProcesses = () => {

    return (
        <div className="sp__main_description p-8 lg:p-24">
            <br></br>
            <div className="sp__description">
                <h3>The schedule and procedure for shifting can be found <u><a href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/registrar/schedules/shifting_ug.pdf">here</a></u>.</h3>
            </div>
            <div className="sp__description">
                <h2>General Policies on Shifting</h2>
            </div>
            <div className="sp__description">
                <h4>▪ An applicant (except freshmen students) must have a residency of two (2) completed terms in the current program</h4>
                <h4>▪ The approval of the application to shift depends on the accepting department/college.</h4>
                <h4>▪ Colleges and departments may have additional requirements and policies</h4>
                <h4>▪ Students may shift to programs offered either in the Manila or Laguna campuses.</h4>
                <h4>▪ The online form can only be accessed once per term. Thus, it is expected that the student has already verified that the program applied for is offered in the following term.</h4>
                <h4>▪ Each student can only apply for a <strong>maximum of two (2) programs per term</strong>.</h4>
            </div>
            <div className="sp__description">
                <h2>Shifting Fees</h2>
            </div>
            <div className="sp__description">
                <h4>▪ Application fee INCLUDING Transcript of Records – Php 500.00</h4>
                <h4>▪ College Processing Fee – Php 50.00</h4>
            </div>
            <div className="sp__description">
                <h5><strong>Note:</strong> Download and fill up the <u><a href="https://drive.google.com/file/d/1A2ZTMBsh0GwE-A1pSBo6jNPal3aUN9BD/view?usp=drive_link">Shifting Fee Assessment form</a></u>, then pay at the cashier.</h5>
            </div>
            <div className="sp__description">
                <h3><strong>For an updated shifting schedule and procedure,</strong> view <u><a href="https://www.dlsu.edu.ph/wp-content/uploads/pdf/registrar/schedules/shifting_ug.pdf">here</a></u>.</h3>
            </div>




        </div >
    );
};

export default ShiftingProcesses;