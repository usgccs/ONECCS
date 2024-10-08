import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ToDo from "../pages/todo/ToDo";
import Button from "../pages/todo/Button";
import Dropdown from "../pages/todo/Dropdown";
import OrgDescription from "./orgDescription/OrgDescription";
import LCCSG from "@/pages/about-us/LCCSG/LCCSG";
import PTS from "../pages/about-us/PTS/PTS";
import CSG from "../pages/about-us/CSG/CSG"
import GDSC from "../pages/about-us/GDSC/GDSC";
import ACM from "../pages/about-us/ACM/ACM"
import INDIE from "../pages/about-us/INDIE/INDIE";
import MSC from "../pages/about-us/MSC/MSC"
import CATCH2T27 from "../pages/about-us/CATCH2T27/CATCH2T27";
import CATCH2T26 from "../pages/about-us/CATCH2T26/CATCH2T26";
import CATCH2T25 from "../pages/about-us/CATCH2T25/CATCH2T25";
import CATCH2T24 from "@/pages/about-us/CATCH2T24/CATCH2T24";
import LSCS from "../pages/about-us/LSCS/LSCS";
import Processes from "../pages/student-services/processes/Processes";
import StudentServices from "../pages/student-services/StudentServices";
import Support from "../pages/support/Support";
// import FinancialAid from "./support/financialAid/financialAid"; 
import Academics from "../pages/support/academics/Academics";
import FinancialAid from "../pages/support/financial-aid/FinancialAid";
import MentalHealth from "../pages/support/mental-health/MentalHealth";
import StudentWelfare from "../pages/support/student-welfare/StudentWelfare";
import AboutUs from "../pages/about-us/AboutUs";
import Opportunities from "@/pages/opportunities/Opportunities";
import CareerHub from "@/pages/careerhub/CareerHub";
// import { path } from "animejs";
// import { path } from "animejs";


const routes = [
    {/* CTRL + CLICK the elements to go to the file */ },
    { path: "/", element: <HomePage />, name: "Homepage" },
    { path: "/todo", element: <ToDo />, name: "Todo" },
    { path: "/button", element: <Button />, name: "Button" },
    { path: "/dropdown", element: <Dropdown />, name: "Dropdown" },
    { path: "/about-us", element: <AboutUs />, name: "About Us"},
    { path: "/about-us/csg", element: <CSG />, name: "Computer Studies Government" },
    { path: "/about-us/lccsg", element: <LCCSG />, name: "La Salle Computer Society Government"},
    { path: "/about-us/pts", element: <PTS />, name: "Peer Tutors Society" },
    { path: "/about-us/gdsc", element: <GDSC />, name: "Google Developer Student Clubs" },
    { path: "/about-us/acm", element: <ACM />, name: "DLSU ACM Student Chapter" },
    { path: "/about-us/indie", element: <INDIE />, name: "Initiators of Development in Interactive Entertainment" },
    { path: "/about-us/msc", element: <MSC />, name: "Microsoft Student Community" },
    { path: "/about-us/catch2t27", element: <CATCH2T27 />, name: "Computer Batch 2T27" },
    { path: "/about-us/catch2t26", element: <CATCH2T26 />, name: "Computer Batch 2T26" },
    { path: "/about-us/catch2t25", element: <CATCH2T25 />, name: "Computer Batch 2T25" },
    { path: "/about-us/catch2t24", element: <CATCH2T24 />, name: "Computer Batch 2T24" },
    { path: "/about-us/lscs", element: <LSCS />, name: "La Salle Computer Society" },
    { path: "/student-services", element: <StudentServices/>, name: "Student Services" },
    { path: "/student-services/processes", element: <Processes />, name: "Processes" },
    { path: "/support", element: <Support />, name: "Support" },
    { path: "/support/academics", element: <Academics />, name: "Academics" },
    { path: "/support/financial-aid", element: <FinancialAid />, name: "Financial Aid" },
    { path: "/support/mental-health", element: <MentalHealth />, name: "Mental Health" },
    { path: "/support/student-welfare", element: <StudentWelfare />, name: "Student Welfare"},
    { path: "/opportunities", element: <Opportunities />, name: "Opportunities"},
    { path: "/career-hub", element: <CareerHub />, name: "Career Hub"}



];

export default routes;

