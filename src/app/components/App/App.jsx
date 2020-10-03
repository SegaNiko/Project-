import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "../../routes/AppRoutes";
import CommonLayout from "../../../shered/layouts/CommonLayout/CommonLayout";

const App = () => {
  return (
    <BrowserRouter>
      <CommonLayout>
        <AppRoutes />
      </CommonLayout>
    </BrowserRouter>
  );
};

export default App;
