import React from 'react';
import './ScholarshipSection.css';

const ScholarshipSection = () => {
    return (
        <div className="w-full flex flex-wrap md:gap-16 gap-12 items-start justify-center">
            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-96 sm:w-[340px] w-72">
                <div className="scholarship-column">
                    <span className='font-semibold text-2xl text-black text-center'>St. Mutien Marie Scholarship Grant</span>
                    <br /><br />
                    <p>The St. Mutien Marie Scholarship Grant for Graduates supports the University’s goal in making quality education accessible to those who are engaged in the profession of human formation and development.</p>
                    <br />
                    <h3><strong>Benefits:</strong></h3>
                    <ul>
                        <li>■ 50% discount on tuition (excluding miscellaneous and other fees)</li>
                    </ul>
                    <br />

                    <h3><strong>Application Dates:</strong></h3>
                    <ul>
                        <li>■  February 10, 2023 (Friday) to March 10, 2023 (Friday)</li>
                        <li>■  Online Release of Results: 29 April 2023 (Saturday)</li>
                    </ul>
                    <br />
                    <a href="https://www.dlsu.edu.ph/admissions/scholarships/grants/st-mutien-marie-scholarship-grant-graduate/" className="scholarship-button">ST. MUTIEN MARIE SCHOLARSHIP GRANT (GRADUATE)</a>
                </div>
            </div>

            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-96 sm:w-[340px] w-72">
                <div className="scholarship-column">
                <span className='font-semibold text-2xl text-2E8B57 text-center'>Vaugirard Scholarship Program</span>
                    <br /><br />
                    <p>This scholarship program aims to create a positive social transformation in the grantees. Beginning AY 2012-13, the University will provide fifty (50) new scholarship slots every year exclusively for students who graduated from Philippine public schools. The scholarship program provides an opportunity for these students to access Lasallian education through any baccalaureate degree program at De La Salle University.</p>
                    <br />
                    <h3><strong>Benefits:</strong></h3>
                    <ul>
                        <li>■  Full waiver of tuition, miscellaneous and other fees from the first term until the conclusion of the undergraduate program.</li>
                        <li>■  Monthly stipend of Php 10,000 for the entire duration of the program.</li>
                        <li>■  An incentive equivalent to the stipend for one (1) month for those graduating with Latin honors.</li>
                        <li>■  Other privileges such as, but not exclusive to, advance enrollment, waiver of adjustment fee, waiver of graduation fees, and the likes.</li>
                    </ul>
                    <br />
                    <a href="https://www.dlsu.edu.ph/admissions/scholarships/grants/vaugirard-scholarship-program/" className="scholarship-button">VAUGIRARD SCHOLARSHIP PROGRAM</a>
                </div>
            </div>

            <div className="flex flex-col items-center md:gap-4 gap-2 justify-center md:w-96 sm:w-[340px] w-72">
                <div className="scholarship-column">
                    <span className='font-semibold text-2xl text-black text-center'>Br. Andrew Gonzalez Academic Scholarship</span>
                    <br /><br />
                    <p>High school students who ranked Top 1 (with highest honors) for each strand (STEM, ABM, HUMMS) of La Salle district schools and have passed the entrance exam will be awarded a full academic scholarship (tuition and fees) starting in their freshman year.</p>
                    <br />
                    <a href="https://www.dlsu.edu.ph/admissions/scholarships/grants/br-andrew-gonzalez-academic-scholarship/" className="scholarship-button">BR. ANDREW GONZALEZ ACADEMIC SCHOLARSHIP</a>
                </div>
            </div>
        </div>
    );
}

export default ScholarshipSection;
