import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ToDo from "../pages/todo/ToDo";
import OrgDescription from "./orgDescription/OrgDescription";
import CSG from "../pages/about-us/CSG/CSG"
import CATCH2T26 from "../pages/about-us/CATCH2T26/CATCH2T26"
import LCCSG from "../pages/about-us/LCCSG/LCCSG"

const routes = [
    {/* CTRL + CLICK the elements to go to the file */ },
    { path: "/", element: <HomePage />, name: "Homepage" },
    { path: "/todo", element: <ToDo />, name: "Todo" },
    { path: "/about-us/csg", element: <CSG />, name: "Computer Studies Government" },
    { path: "/about-us/catch2t26", element: <CATCH2T26 />, name: "CATCH2T26" },
    { path: "/about-us/lccsg", element: <LCCSG />, name: "LCCSG" }
    
];

export default routes;

