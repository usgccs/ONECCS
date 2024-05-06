import React from "react";
import HomePage from "../pages/homepage/HomePage";
import ToDo from "../pages/todo/ToDo";
import ContactPerson from "../pages/contactPerson/ContactPerson";


const routes = [
    {/* CTRL + CLICK the elements to go to the file */ },
    { path: "/", element: <HomePage />, name: "Homepage" },
    { path: "/todo", element: <ToDo />, name: "Todo" },
    { path: "/contactPerson", element: <ContactPerson />, name: "ContactPerson" }

];

export default routes;

