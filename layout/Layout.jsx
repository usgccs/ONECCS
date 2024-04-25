// Layout.js
import React from "react";
import PageRouter from "../src/components/PageRouter";
import { BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
  return (
    <Router>
    <div>
      {/* Your layout components */}
      {/* Navbar */}
      <PageRouter />
      {/* Footer */}
    </div>
    </Router>
  );
};

export default Layout;
