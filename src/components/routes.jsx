import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ToDo from "../pages/todo/ToDo";
import SectionHeader from "../components/sectionHeader/SectionHeader"

const routes = [
    {/* CTRL + CLICK the elements to go to the file */},
    { path: "/", element: <HomePage />, name: "Homepage" },
    { path: "/todo", element: <ToDo/>, name: "Todo"},
    { path: "/SectionHeader" , element: <SectionHeader/>, name: "Section Header"}
];

export default routes;

