import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ToDo from "../pages/todo/ToDo";

const routes = [
    {/* CTRL + CLICK the elements to go to the file */},
    { path: "/", element: <HomePage />, name: "Homepage" },
    { path: "/todo", element: <ToDo/>, name: "Todo"},
];

export default routes;

