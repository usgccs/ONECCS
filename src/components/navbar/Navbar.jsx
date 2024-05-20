import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const location = useLocation();
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleMenuToggleOn = (event) => {
        event.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuToggleOff = () => {
        setIsMenuOpen(false);
    };

    const handleMouseEnter = (dropdownName) => {
        setDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };

    const NavLink = ({ to, children, dropdownOptions }) => {
        const isActive = location.pathname === to;
        return (
            <div
                className="relative"
                onMouseEnter={() => handleMouseEnter(dropdownOptions ? children : null)}
                onMouseLeave={handleMouseLeave}
            >
                <Link to={to} className={`inline-block px-3 py-2 text-white font-${isActive ? 'bold' : 'normal'} hover:font-bold hover:text-white`} onClick={handleMenuToggleOff}>{children}</Link>
                {dropdown === children && dropdownOptions && (
                    <div className="absolute top-full left-2 bg-white p-2 mt-1 rounded shadow" onMouseEnter={() => handleMouseEnter(children)} onMouseLeave={handleMouseLeave}>
                        {dropdownOptions.map((option, index) => (
                            <Link key={index} to={option.to} className="block font-normal text-gray-800 py-2 px-3" onClick={handleMenuToggleOff}>{option.label}</Link>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const MenuLink = ({ to, children, dropdownOptions }) => {
        const isActive = location.pathname === to;
        const [menuDropdown, setMenuDropdown] = useState(false);

        const toggleDropdown = () => {
            setMenuDropdown(!menuDropdown);
        };

        return (
            <div className="relative">
                <div className="flex items-center">
                    <Link
                        to={to}
                        className={`inline-block px-5 py-2 text-white font-${isActive ? 'bold' : 'normal'} hover:font-bold hover:text-white`}
                        onClick={handleMenuToggleOff}
                    >
                        {children}
                    </Link>
                    {dropdownOptions && (
                        <div className="-ml-4" onClick={toggleDropdown}>
                            <FiChevronDown className="text-white cursor-pointer" />
                        </div>
                    )}
                </div>
                {menuDropdown && (
                    <div className="p-2">
                        {dropdownOptions.map((option, index) => (
                            <Link key={index} to={option.to} className="block font-normal text-white py-1 pl-10" onClick={handleMenuToggleOff}>{option.label}</Link>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <div className="flex items-center justify-between bg-[#24453E] py-6 px-10 drop-shadow-lg">
                <div className="flex items-center">
                    <img src="/LargeWhite.png" className="w-8 h-auto" />
                    <p className="text-white text-2xl ml-5">ONECCS</p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex items-center text-lg text-white lg:block hidden">
                    <div className="flex flex-wrap">
                        <NavLink to="/" dropdownOptions={null}>Home</NavLink>
                        <NavLink to="/todo" dropdownOptions={[{ to: "about-us/csg", label: "CSG" }, { to: "about-us/catch2t27", label: "CATCH2T27" }, { to: "about-us/catch2t26", label: "CATCH2T26" }, { to: "about-us/catch2t25", label: "CATCH2T25" }, { to: "about-us/catch2t24", label: "CATCH2T24" }, { to: "about-us/acm", label: "ACM" }, { to: "about-us/gdsc", label: "GDSC" }, { to: "about-us/indie", label: "INDIE" }, { to: "about-us/lccsg", label: "LCCSG" }, { to: "about-us/lscs", label: "LSCS" }, { to: "about-us/msc", label: "MSC" }, { to: "/about-us/pts", label: "PTS" }]}>About Us</NavLink>
                        <NavLink to="/todo" dropdownOptions={[{ to: "/processes", label: "Processes" }]}>Student Services</NavLink>
                        <NavLink to="/todo" dropdownOptions={[{ to: "/academics", label: "Academics" }, { to: "/financial-aid", label: "Financial Aid" }, { to: "/mental-health", label: "Mental Health" }, { to: "/student-welfare", label: "Student Welfare" }]}>Support</NavLink>
                        <NavLink to="/todo" dropdownOptions={null}>Opportunities</NavLink>
                        <NavLink to="/todo" dropdownOptions={null}>Career Hub</NavLink>
                    </div>
                </div>
                <div className="text-white ml-5 lg:block hidden">
                    <FaSearch style={{ fontSize: '18px' }} />
                </div>
                <div className="text-white lg:hidden">
                    <FiMenu onClick={handleMenuToggleOn} style={{ fontSize: '28px', cursor: 'pointer' }} />
                </div>
            </div>

            {isMenuOpen && (
                <div ref={menuRef} className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-end">
                    <div className="bg-[#24453E] h-full w-72 text-white text-lg shadow">
                        <div className="p-6">
                            <div className="flex justify-end mt-2 mr-4">
                                <FiX onClick={handleMenuToggleOff} style={{ fontSize: '24px', cursor: 'pointer' }} />
                            </div>
                            <div className="flex flex-col">
                                <MenuLink to="/">Home</MenuLink>
                                <MenuLink to="/todo" dropdownOptions={[{ to: "/csg", label: "CSG" }, { to: "/catch-27", label: "CATCH2T27" }, { to: "/catch-26", label: "CATCH2T27" }, { to: "/catch-25", label: "CATCH2T25" }, { to: "/catch-24", label: "CATCH2T24" }, { to: "/acm", label: "ACM" }, { to: "/gdsc", label: "GDSC" }, { to: "/indie", label: "INDIE" }, { to: "/lccsg", label: "LCCSG" }, { to: "/lscs", label: "LSCS" }, { to: "/msc", label: "MSC" }, { to: "/pts", label: "PTS" }]}>About Us</MenuLink>
                                <MenuLink to="/todo" dropdownOptions={[{ to: "/processes", label: "Processes" }]}>Student Services</MenuLink>
                                <MenuLink to="/todo" dropdownOptions={[{ to: "/academics", label: "Academics" }, { to: "/financial-aid", label: "Financial Aid" }, { to: "/mental-health", label: "Mental Health" }, { to: "/student-welfare", label: "Student Welfare" }]}>Support</MenuLink>
                                <MenuLink to="/todo" dropdownOptions={null}>Opportunities</MenuLink>
                                <MenuLink to="/todo" dropdownOptions={null}>Career Hub</MenuLink>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
