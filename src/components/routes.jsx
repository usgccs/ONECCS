import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ToDo from "../pages/todo/ToDo";
import Button from "../pages/todo/Button";
import Dropdown from "../pages/todo/Dropdown";
import OrgDescription from "./orgDescription/OrgDescription";
import PTS from "../pages/about-us/PTS/PTS";
import CSG from "../pages/about-us/CSG/CSG"
import GDSC from "../pages/about-us/GDSC/GDSC";
import ACM from "../pages/about-us/ACM/ACM"
import INDIE from "../pages/about-us/INDIE/INDIE";
import MSC from "../pages/about-us/MSC/MSC"
import CATCH2T27 from "../pages/about-us/CATCH2T27/CATCH2T27";


const routes = [
    {/* CTRL + CLICK the elements to go to the file */ },
    { path: "/", element: <HomePage />, name: "Homepage" },
    { path: "/todo", element: <ToDo />, name: "Todo" },
    { path: "/button", element: <Button />, name: "Button" },
    { path: "/dropdown", element: <Dropdown />, name: "Dropdown" },
    { path: "/about-us/csg", element: <CSG />, name: "Computer Studies Government" },
    { path: "/about-us/pts", element: <PTS />, name: "Peer Tutors Society" },
    { path: "/about-us/gdsc", element: <GDSC />, name: "Google Developer Student Clubs" },
    { path: "/about-us/acm", element: <ACM />, name: "DLSU ACM Student Chapter" },
    { path: "/about-us/indie", element: <INDIE />, name: "Initiators of Development in Interactive Entertainment" },
    { path: "/about-us/msc", element: <MSC />, name: "Microsoft Student Community" },
    { path: "/about-us/catch2t27", element: <CATCH2T27 />, name: "Computer Batch 2T27" },


];

export default routes;

