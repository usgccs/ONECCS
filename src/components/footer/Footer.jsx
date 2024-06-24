import { Link } from 'react-router-dom';
import './Footer.css';

const universityStudentGovernment = [
    { name: "University Student Government", abbr: "DLSU USG", link: "/" },
    { name: "Computer Studies Government", abbr: "DLSU CSG", link: "/about-us/csg" },
    { name: "LC Computer Studies Government", abbr: "DLSU LCCSG", link: "/" },
    { name: "Computer Batch 2T24", abbr: "CATCH2T24", link: "/" },
    { name: "Computer Batch 2T25", abbr: "CATCH2T25", link: "/" },
    { name: "Computer Batch 2T26", abbr: "CATCH2T26", link: "/" },
    { name: "Computer Batch 2T27", abbr: "CATCH2T27", link: "/about-us/catch2t27" },
    
  ];
  
  const ccsStudentOrganizations = [
    { name: "Peer Tutors Society", abbr: "PTS", link: "/about-us/pts" },
    { name: "Google Developer Student Clubs", abbr: "GDSC", link: "/about-us/gdsc" },
    { name: "DLSU ACM Student Chapter", abbr: "ACM", link: "/about-us/acm" },
    { name: "Initiators of Development in Interactive Entertainment", abbr: "INDIE", link: "/about-us/indie" },
    { name: "Microsoft Student Community", abbr: "MSC", link: "/about-us/msc" },
  ];

const Footer = () => {
  return (
    <footer>
        <div className="min-h-[360px] w-full bg-black">
            <div className="flex w-full text-center justify-center items-center text-white py-8 sm:px-16">
                <div className="flex flex-col h-full w-fit px-auto items-center justify-center sm:gap-12">
                    <div className="flex flex-row h-40 w-full justify-start items-center gap-4">
                        <img src="/LargeWhite.png" className="object-cover w-10 h-14 md:w-14 md:h-24"/>
                        <span className="text-3xl md:text-6xl bebas-neue-regular ">ONECCS</span>
                    </div>
                    <div className="grid grid-cols-5 w-full gap-12 lg:gap-16 hidden sm:flex px-12">
                        <div className='col-span-1 flex flex-col gap-3'>
                            <span className='text-xl'>Follow us</span>
                            <div className='flex flex-row items-center justify-center gap-3'>
                            <Link to={`https://www.facebook.com/DLSU.CSG`}>
                                    <img src="/footer-images/facebook.svg" className="w-8 h-8 hover:scale-110"/>
                                </Link>
                                <Link to={`https://www.instagram.com/dlsu_csg/`} >
                                    <img src="/footer-images/instagram.svg" className="w-8 h-8 hover:scale-110"/>
                                </Link>
                                <Link to={`https://t.me/DLSU_CSG`} >
                                    <img src="/footer-images/telegram.svg" className="w-8 h-8 hover:scale-110"/>
                                </Link>
                            </div>
                        </div>
                        <div className='col-span-2 flex flex-col gap-5'>
                            <span className='font-semibold text-xl'>University Student Government</span>
                            <div className='grid grid-cols-3 grid-rows-3 items-center justify-center text-start gap-3'>
                                {universityStudentGovernment.map((org, index) => (
                                    <Link key={index} to={org.link} className="text-md hover:underline text-white hover:text-white font-light hover:scale-110">
                                        {org.abbr}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='col-span-2 flex flex-col gap-5'>
                            <span className='font-semibold text-xl'>CCS Student Organizations</span>
                            <div className='grid grid-cols-3 grid-rows-3 items-center justify-center text-start gap-3'>
                                {ccsStudentOrganizations.map((org, index) => (
                                    <Link key={index} to={org.link} className="text-md hover:underline text-white hover:text-white font-light hover:scale-110">
                                        {org.abbr}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4 sm:hidden">
                        <div className='flex flex-col gap-3'>
                            <span className='font-semibold text-lg'>University Student Government</span>
                            <div className='grid grid-cols-3 grid-rows-3 items-center justify-center gap-3'>
                                {universityStudentGovernment.map((org, index) => (
                                    <Link key={index} to={org.link} className="text-md hover:underline text-white hover:text-white font-light">
                                        {org.abbr}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <span className='font-semibold text-lg'>CCS Student Organizations</span>
                            <div className='grid grid-cols-3 grid-rows-3 items-center justify-center gap-3'>
                                {ccsStudentOrganizations.map((org, index) => (
                                    <Link key={index} to={org.link} className="text-md hover:underline text-white hover:text-white font-light">
                                        {org.abbr}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 py-8'>
                            <span className='text-lg'>Follow us</span>
                            <div className='flex flex-row items-center justify-center gap-5'>
                                <Link to={`https://www.facebook.com/DLSU.CSG`}>
                                    <img src="/footer-images/facebook.svg" className="w-8 h-8"/>
                                </Link>
                                <Link to={`https://www.instagram.com/dlsu_csg/`} >
                                    <img src="/footer-images/instagram.svg" className="w-8 h-8"/>
                                </Link>
                                <Link to={`https://t.me/DLSU_CSG`} >
                                    <img src="/footer-images/telegram.svg" className="w-8 h-8"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full justify-center sm:justify-end items-center gap-4 px-12">
                        <span className="text-2xl bebas-neue-regular ">@ ONECCS</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;