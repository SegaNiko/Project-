import React from "react";

import "./index.scss";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">
        Copyright &copy; 2020{" "}
        <span className="footer__name">Sergii Nikolaychuk</span>{" "}
        <span className="footer__reserved"></span>All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
