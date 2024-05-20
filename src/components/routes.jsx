import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ToDo from "../pages/todo/ToDo";
import OrgDescription from "./orgDescription/OrgDescription";
import CSG from "../pages/about-us/CSG/CSG"
import GDSC from "../pages/about-us/GDSC/GDSC";

const routes = [
    {/* CTRL + CLICK the elements to go to the file */ },
    { path: "/", element: <HomePage />, name: "Homepage" },
    { path: "/todo", element: <ToDo />, name: "Todo" },
    { path: "/about-us/csg", element: <CSG />, name: "Computer Studies Government" },
    { path: "/about-us/gdsc", element: <GDSC />, name: "Google Developer Student Clubs" }
    
];

export default routes;

