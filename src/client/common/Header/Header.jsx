import React from "react";

import Navbar from "../Navbar/Navbar";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
