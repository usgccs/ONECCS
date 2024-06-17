import React, { useState } from 'react';
import "./TuitionFeePayment.css";

const TuitionFeePayment = () => {
    const [eligibilityOpen, setEligibilityOpen] = useState(false);
    const [procedureOpen, setProcedureOpen] = useState(false);

    const toggleEligibility = () => setEligibilityOpen(!eligibilityOpen);
    const toggleProcedure = () => setProcedureOpen(!procedureOpen);

    return (
        <div className="tfp__main_description">
            <br />
            <div className="tfp__description">
                <p>The <strong>TFA Program</strong>, organized by DLSU - Parents of University Students Organization (DLSU-PUSO), aims to </p>
                <p>assist university students regarding their financial and educational concerns.</p>
                <br />
                <p>Application Period: April 6, 2024 - April 19, 2024</p>
                <br />
                <p>To apply, kindly fill out this form: <u>https://bit.ly/PulsoNgPUSO-CCS</u></p>
            </div>

            <div className="dropdowncontainers">
                <div className="tfp__dropdowns">
                    <div className="tfp__dropdown">
                        <button className="tfp__dropdown__toggle" onClick={toggleEligibility}>
                            {eligibilityOpen }ELIGIBILITY
                        </button>
                        {eligibilityOpen && (
                            <div className="tfp__dropdown__content">
                                <p>Students who are eligible for the CIF / TFA must be of and/or have the following:</p>
                                <ol>
                                    <br />
                                    <li>1.) Open to all undergraduate (ID 123 and below) students of De La Salle University, from the Manila campus.</li>
                                    <br />
                                    <li>2.) Must be in need of financial assistance.</li>
                                    <br />
                                    <li>3.) Must not have been previously a CIF grantee (for CIF Applicants).</li>
                                    <br />
                                    <li>4.) Must have at least one term left as a DLSU student.</li>
                                    <br />
                                    <li>5.) Must not have applied for leave of absence.</li>
                                    <br />
                                    <li>6.) Must not be a beneficiary of any other scholarship program (for CIF).</li>
                                    <br />
                                    <li>7.) There is no minimum CGPA grade requirement.</li>
                                </ol>
                                <br />
                                <p>For more information about the program, you may view them here: <a href="https://bit.ly/PULSOngPUSO_RequirementsPub" target="_blank" rel="noopener noreferrer">bit.ly/PULSOngPUSO_RequirementsPub</a></p>
                            </div>
                        )}
                    </div>

                    <div className="tfp__dropdown">
                        <button className="tfp__dropdown__toggle" onClick={toggleProcedure}>
                            {procedureOpen}PROCEDURE
                        </button>
                        {procedureOpen && (
                            <div className="tfp__dropdown__content">
                                <p>Prepare the following requirements:</p>
                                <ul>
                                    <br />  
                                    <li>• DLSU ID Photo</li>
                                    <br />
                                    <li>• EAF for Term 2, AY 2023-2024</li>
                                    <br />
                                    <li>• Letter of Intent</li>
                                    <br />
                                    <li>• Signed Data Privacy Consent Form</li>
                                    <br />
                                </ul>
                                <br />
                                <p>Accomplish [CSG] Pulso ng PUSO: Financial Aid Assistance Program Application Form through this form <a href="https://bit.ly/PulsoNgPUSO-CCS" target="_blank" rel="noopener noreferrer">https://bit.ly/PulsoNgPUSO-CCS</a></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>


            <div className="tfp__description">
                <br /><br />
            <p>Application Period: April 5 - April 17, 2024.</p>
            <br />
            <p>To apply, kindly click on the button below.</p>


            </div>
        </div>
    );
}

export default TuitionFeePayment;
