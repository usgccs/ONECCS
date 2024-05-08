import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ToDo from "../pages/todo/ToDo";
import OrgDescription from "./orgDescription/OrgDescription";

const routes = [
    {/* CTRL + CLICK the elements to go to the file */ },
    { path: "/", element: <HomePage />, name: "Homepage" },
    { path: "/todo", element: <ToDo />, name: "Todo" },
    { path: "/SectionHeader", element: <OrgDescription />, name: "OrgDescription" }
];

export default routes;

