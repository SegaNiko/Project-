import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./components/Router/Router";
import CommonLayout from "./layouts/CommonLayout/CommonLayout";

const App = () => {
  return (
    <BrowserRouter>
      <CommonLayout>
        <Router />
      </CommonLayout>
    </BrowserRouter>
  );
};

export default App;
