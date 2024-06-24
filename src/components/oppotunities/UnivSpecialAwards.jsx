import React, { useState } from 'react';

const UnivSpecialAwards = () => {
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [showDropdown4, setShowDropdown4] = useState(false);
    const [showDropdown5, setShowDropdown5] = useState(false);

    const toggleDropdown1 = () => setShowDropdown1(!showDropdown1);
    const toggleDropdown2 = () => setShowDropdown2(!showDropdown2);
    const toggleDropdown3 = () => setShowDropdown3(!showDropdown3);
    const toggleDropdown4 = () => setShowDropdown4(!showDropdown4);
    const toggleDropdown5 = () => setShowDropdown5(!showDropdown5);

    return (
        <div className="w-full flex flex-col items-center justify-center text-xl">
            {/* Top section with three columns */}
            <div className="w-full flex flex-wrap justify-center md:gap-16 gap-12">
                <div className="flex flex-col items-center md:gap-16 gap-12">
                    <div className="flex flex-col md:gap-4 gap-2 md:w-96 sm:w-[340px] w-72">
                        <div className="pt-10 text-center">
                            <span className='font-semibold text-3xl' style={{ color: '#24453e' }}>Brother Gabriel Connon Award</span>
                            <br /><br />
                        </div>
                        <div className="text-justify">
                            <p>The award gives recognition to students with a strong Christian character and outstanding accomplishments in the fields of academics, leadership, and community service. The recipient of this award is envisioned to reflect the essence of the mission statement of De La Salle University.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2 lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-full text-xl">
                        <div className="text-center cursor-pointer" onClick={toggleDropdown1}>
                            <span className="font-semibold text-3xl" style={{ color: '#24453e' }}>Qualifications</span>
                            <br /><br />
                        </div>
                        {showDropdown1 && (
                            <div className="text-justify p-4 border border-gray-300 rounded">
                                <p className='pb-5'>To qualify, the applicant must:</p>
                                <ul className="pl-10 list-disc space-y-4">
                                    <li>be a student at the undergraduate level;</li>
                                    <li>have a Cumulative Grade Point Average (CGPA) of at least 3.400 with no failing grade;</li>
                                    <li>have residency of at least three (3) years at De La Salle University;</li>
                                    <li>be an officer / head of at least one (1) recognized organization on campus for two (2) years, as certified by a Director of a unit under Student Affairs;</li>
                                    <li>be an officer / head of at least one (1) off-campus and/or on-campus community-based* project for one (1) year, as certified by the head of the sponsoring organization;</li>
                                    <li>possess good moral character and must not have committed any major offense any time during his/her stay in the University and any minor offense committed during his/her last three (3) terms, as certified by the Director of SDFO.</li>
                                </ul>
                                <br />
                                <span className="text-lg italic">*The community-based projects should be sustainable and have created a major impact in the community.</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center md:gap-16 gap-12">
                    <div className="flex flex-col md:gap-4 gap-2 md:w-96 sm:w-[340px] w-72">
                        <div className="pt-10 text-center">
                            <span className='font-semibold text-3xl' style={{ color: '#24453e' }}>Student Leadership Award</span>
                            <br /><br />
                        </div>
                        <div className="text-justify">
                            <p>The Student Leadership Award is given to students who have ably balanced their academic studies with student activities. This award gives recognition to those who have rendered exemplary service to the University and student body through active leadership in student organizations.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2 lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-full text-xl">
                        <div className="text-center cursor-pointer" onClick={toggleDropdown2}>
                            <span className="font-semibold text-3xl" style={{ color: '#24453e' }}>Qualifications</span>
                            <br /><br />
                        </div>
                        {showDropdown2 && (
                            <div className="text-justify p-4 border border-gray-300 rounded">
                                <p className='pb-5'>To qualify, the applicant must:</p>
                                <ul className="pl-10 list-disc space-y-4">
                                    <li>be a student at the undergraduate level;</li>
                                    <li>have a Cumulative Grade Point Average (CGPA) of at least 2.500;</li>
                                    <li>have residency of at least two (2) years at De La Salle University;</li>
                                    <li>be an officer / head of at least one (1) recognized organization on campus for two (2) years, as certified by a Director of any office under the Student Affairs;</li>
                                    <li>possess good moral character and must not have committed any major offense, as certified by the Director of SDFO.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center md:gap-16 gap-12">
                    <div className="flex flex-col md:gap-4 gap-2 md:w-96 sm:w-[340px] w-72">
                        <div className="pt-10 text-center">
                            <span className='font-semibold text-3xl' style={{ color: '#24453e' }}>Community Development Award</span>
                            <br /><br />
                        </div>
                        <div className="text-justify">
                            <p>High school students who ranked Top 1 (with highest honors) for each strand (STEM, ABM, HUMMS) of La Salle district schools and have passed the entrance exam will be awarded a full academic scholarship (tuition and fees) starting in their freshman year.</p>
                            <br />
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2 lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-full text-xl">
                        <div className="text-center cursor-pointer" onClick={toggleDropdown3}>
                            <span className="font-semibold text-3xl" style={{ color: '#24453e' }}>Qualifications</span>
                            <br /><br />
                        </div>
                        {showDropdown3 && (
                            <div className="text-justify p-4 border border-gray-300 rounded">
                                <p className='pb-5'>To qualify, the applicant must:</p>
                                <ul className="pl-10 list-disc space-y-4">
                                    <li>be a student at the undergraduate level;</li>
                                    <li>have a Cumulative Grade Point Average (CGPA) of at least 2.000;</li>
                                    <li>have residency of at least two (2) years at De La Salle University;</li>
                                    <li>be an officer / head of at least one (1) off-campus and/or on-campus community-based* project for at least two (2) years, as certified by the head of the sponsoring organization;</li>
                                    <li>possess good moral character and must not have committed any major offense, as certified by the Director of SDFO.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom section with two columns */}
            <div className="w-full flex flex-wrap justify-center md:gap-16 gap-12 mt-12">
                <div className="flex flex-col items-center md:gap-16 gap-12">
                    <div className="flex flex-col md:gap-4 gap-2 md:w-96 sm:w-[340px] w-72">
                        <div className="pt-10 text-center">
                            <span className='font-semibold text-3xl' style={{ color: '#24453e' }}>Athletics Award</span>
                            <br /><br />
                        </div>
                        <div className="text-justify">
                            <p>The Athletics Award honors student athletes who have consistently rendered outstanding performance in their various competitions and have made a mark as a Lasallian athlete.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2 lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-full text-xl">
                        <div className="text-center cursor-pointer" onClick={toggleDropdown4}>
                            <span className="font-semibold text-3xl" style={{ color: '#24453e' }}>Qualifications</span>
                            <br /><br />
                        </div>
                        {showDropdown4 && (
                            <div className="text-justify p-4 border border-gray-300 rounded">
                                <p className='pb-5'>To qualify, the applicant must:</p>
                                <ul className="pl-10 list-disc space-y-4">
                                    <li>be a student at the undergraduate level;</li>
                                    <li>have residency of at least two (2) years at De La Salle University;</li>
                                    <li>have membership in a varsity team for at least two (2) years, as certified by the Director of the Office of Sports Development;</li>
                                    <li>possess good moral character and must not have committed any major offense, as certified by the Director of SDFO.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col items-center md:gap-16 gap-12">
                    <div className="flex flex-col md:gap-4 gap-2 md:w-96 sm:w-[340px] w-72">
                        <div className="pt-10 text-center">
                            <span className='font-semibold text-3xl' style={{ color: '#24453e' }}>Cultural Development Award</span>
                            <br /><br />
                        </div>
                        <div className="text-justify">
                            <p>The Cultural Development Award was created in 2006 to give recognition to students who have significantly enriched the Lasallian and Filipino culture through excellence in the arts.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:gap-4 gap-2 lg:w-[30rem] md:w-[25rem] sm:w-[20rem] w-full text-xl">
                        <div className="text-center cursor-pointer" onClick={toggleDropdown5}>
                            <span className="font-semibold text-3xl" style={{ color: '#24453e' }}>Qualifications</span>
                            <br />
                        </div>
                        {showDropdown5 && (
                            <div className="text-justify p-4 border border-gray-300 rounded">
                                <p className='pb-5'>To qualify, the applicant must:</p>
                                <ul className="pl-10 list-disc space-y-4">
                                    <li>be a student at the undergraduate level;</li>
                                    <li>have residency of at least two (2) years at De La Salle University;</li>
                                    <li>be involved in cultural activities for at least two (2) years, as certified by the Director of Culture and Arts Office;</li>
                                    <li>possess good moral character and must not have committed any major offense, as certified by the Director of SDFO.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* New Section */}
            <div className="w-full flex flex-col items-center mt-12 pb-40 pt-20">
                <div className="text-center text-[#24453E] text-3xl md:text-5xl mb-4 pb-5">Click here to apply!</div>
                <a
                    href="https://my.dlsu.edu.ph/students/awards/graduation_awards/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-72 md:w-96 p-4 text-white rounded-lg bg-[#24453E] text-center"
                >
                    Graduation Awards Application
                </a>
            </div>

        </div>
    );
};

export default UnivSpecialAwards;
