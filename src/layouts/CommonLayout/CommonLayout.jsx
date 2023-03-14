import React from "react";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

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
