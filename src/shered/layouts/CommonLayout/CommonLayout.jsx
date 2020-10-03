import React from "react";

import Header from "../../../client/common/Header/Header";
import Footer from "../../../client/common/Footer/Footer";

const CommonLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

export default CommonLayout;
