import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMouseEnter = (dropdownName) => {
        setDropdown(dropdownName);
    };

    const handleMouseLeave = () => {
        setDropdown(null);
    };

    const NavLink = ({ to, children, dropdownOptions }) => (
        <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(dropdownOptions ? children : null)}
            onMouseLeave={handleMouseLeave}
        >
            <Link to={to} className="inline-block px-3 py-2 text-white font-normal hover:text-gray-300">{children}</Link>
            {dropdown === children && dropdownOptions && (
                <div className="absolute top-full left-2 bg-white p-2 mt-1 rounded shadow" onMouseEnter={() => handleMouseEnter(children)} onMouseLeave={handleMouseLeave}>
                    {dropdownOptions.map((option, index) => (
                        <Link key={index} to={option.to} className="block font-normal text-gray-800 py-2 px-3">{option.label}</Link>
                    ))}
                </div>
            )}
        </div>
    );

    const MenuLink = ({ to, children }) => (
        <Link
            to={to}
            style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 'normal',
                marginLeft: '30px',
                marginTop: '15px',
            }}
            onMouseEnter={(e) => { e.target.style.fontWeight = 'bold'; }}
            onMouseLeave={(e) => { e.target.style.fontWeight = 'normal'; }}
        >
            {children}
        </Link>
    );

    return (
        <>
            <div className="flex items-center justify-between bg-[#24453E] py-6 px-10 mb-20">
                <div className="flex items-center">
                    <img src="/LargeWhite.png" className="w-8 h-auto" />
                    <p className="text-white text-2xl ml-5">ONECCS</p>
                </div>
                <div className="flex-grow"></div>
                <div className="flex items-center text-lg text-white lg:block hidden">
                    <div className="flex flex-wrap">
                        <NavLink to="/" dropdownOptions={null}>Home</NavLink>
                        <NavLink to="/todo" dropdownOptions={[{ to: "/csg", label: "CSG" }, { to: "/catch-27", label: "CATCH2T27" }, { to: "/catch-26", label: "CATCH2T27" }, { to: "/catch-25", label: "CATCH2T25" }, { to: "/catch-24", label: "CATCH2T24" }, { to: "/acm", label: "ACM" }, { to: "/gdsc", label: "GDSC" }, { to: "/indie", label: "INDIE" }, { to: "/lccsg", label: "LCCSG" }, { to: "/lscs", label: "LSCS" }, { to: "/msc", label: "MSC" }, { to: "/pts", label: "PTS" }]}>About Us</NavLink>
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
                    <FiMenu onClick={handleMenuToggle} style={{ fontSize: '28px', cursor: 'pointer' }} />
                </div>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex justify-end">
                    <div className="bg-[#24453E] h-full w-72 text-white text-lg shadow">
                        <div className="p-6">
                            <div className="flex flex-col">
                                <MenuLink to="/">Home</MenuLink>
                                <MenuLink to="/todo">About Us</MenuLink>
                                <MenuLink to="/todo">Student Services</MenuLink>
                                <MenuLink to="/todo">Support</MenuLink>
                                <MenuLink to="/todo">Opportunities</MenuLink>
                                <MenuLink to="/todo">Career Hub</MenuLink>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
