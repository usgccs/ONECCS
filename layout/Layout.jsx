// Layout.js
import React from "react";
import PageRouter from "../src/components/PageRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar"
import Footer from "@/components/footer/Footer";


const Layout = () => {
  return (
    <Router>
      <div>
        {/* Your layout components */}
        <Navbar />
        <PageRouter />
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
