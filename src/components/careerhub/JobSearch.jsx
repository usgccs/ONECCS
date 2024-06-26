const JobSearch = () => {
    return (
        <section id="past-events" className="flex w-full xl:p-20 xl:px-60 lg:p-14 lg:px-20 sm:p-10 p-8 sm:px-20 bg-white">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start justify-center">
                <div className="flex flex-col items-center md:gap-4 gap-2 justify-center w-full">
                    <img src={"https://res.cloudinary.com/dnlrbmzns/image/upload/v1719415298/linkedin_poukeh.png"} alt="Event Logo" className="w-full h-auto object-contain" />
                    <span className='font-semibold text-2xl text-[#24453E] text-center'>LinkedIn</span>
                    <p className='text-[#24453E] font-light text-justify'>
                        LinkedIn can benefit you whether you're an individual trying to expand your network or a job seeker looking for information. As with any social network, you must use Facebook intelligently and avoid being addicted to constantly scrolling your feed. However, a simple investment in the site might pay off handsomely for your career or business.
                    </p>
                </div>
                <div className="flex flex-col items-center md:gap-4 gap-2 justify-center w-full">
                    <img src={"https://res.cloudinary.com/dnlrbmzns/image/upload/v1719415305/glassdoor_cladgb.png"} alt="Event Logo" className="w-full h-auto object-contain" />
                    <span className='font-semibold text-2xl text-[#24453E] text-center'>Glassdoor</span>
                    <p className='text-[#24453E] font-light text-justify'>
                        Glassdoor is a review website where current and past workers may anonymously rate a company. This informs job searchers on what they may anticipate from a certain employer in terms of income, work-life balance, and perks, among other things.
                    </p>
                </div>
                <div className="flex flex-col items-center md:gap-4 gap-2 justify-center w-full">
                    <img src={"https://res.cloudinary.com/dnlrbmzns/image/upload/v1719415298/indeed_ouekam.png"} alt="Event Logo" className="w-full h-auto object-contain" />
                    <span className='font-semibold text-2xl text-[#24453E] text-center'>Indeed</span>
                    <p className='text-[#24453E] font-light text-justify'>
                        Indeed provides job notifications, and all job seekers have the option to complete skills assessments, so you can determine whether your talents match the words on your résumé before being interviewed. The job postings itself are simple to navigate, and selecting the one-click apply option makes applying to jobs seamless!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default JobSearch;
