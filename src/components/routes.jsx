import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ToDo from "../pages/todo/ToDo";
import OrgDescription from "./orgDescription/OrgDescription";
import CSG from "../pages/about-us/CSG/CSG";
import PTS from "../pages/about-us/PTS/PTS";

const routes = [
    {/* CTRL + CLICK the elements to go to the file */ },
    { path: "/", element: <HomePage />, name: "Homepage" },
    { path: "/todo", element: <ToDo />, name: "Todo" },
    { path: "/about-us/csg", element: <CSG />, name: "Computer Studies Government" },
    { path: "/about-us/pts", element: <PTS />, name: "Peer Tutors Society" }

];

export default routes;

