const GraduationAwards = () => {
    return (
        <div className="px-4 sm:px-6 md:px-8">
            <div className="w-full flex flex-wrap md:gap-16 gap-12 pt-10">
                <div className="flex flex-col md:gap-4 gap-2 lg:w-[40rem] md:w-[35rem] sm:w-[30rem] w-full text-xl">
                    <div className="text-center">
                        <span className="font-semibold text-3xl text-2E8B57">Latin Honors</span>
                        <br /><br />
                    </div>
                    <p>The following awards are exclusively given at the Commencement Exercises:</p>                        
                    <ul>
                        <li>■ Summa Cum Laude - With a cumulative GPA of 3.800</li>
                        <br />
                        <li>■ Magna Cum Laude - With a cumulative GPA of 3.600</li>
                        <br />
                        <li>■ Cum Laude - With a cumulative GPA of 3.400</li>
                        <br />
                        <li>■ Honorable Mention - With a cumulative GPA of 3.200</li>
                        <br />
                        <li>■ University Special Awards</li>
                    </ul>
                    <br />
                </div>

                <div className="flex flex-col md:gap-4 gap-2 lg:w-[40rem] md:w-[35rem] sm:w-[30rem] w-full text-xl">
                    <div className="text-center">
                        <span className="font-semibold text-3xl text-2E8B57">College Recognition Awards</span>
                        <br /><br />
                    </div>
                    <p>The following awards are exclusively given at the College Recognition:</p>                        
                    <ul>
                        <li>■ Honorable Mention</li>
                        <br />
                        <li>■ Departmental (e.g., excellence, outstanding thesis/dissertation)</li>
                        <br />
                        <li>■ Loyalty awards</li>
                    </ul>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default GraduationAwards;
