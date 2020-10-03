import React, { useState, useCallback } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import HomePage from "../../client/HomePage/HomePage";
import Api from "../../client/Api/Api";
import TikToe from "../../client/TikToe/TikToe";
import Todo from "../../client/Todo/Todo";
import NoMatch from "../../shered/components/NoMatch/NoMatch";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/api/">
        <Api />
      </Route>

      <Route exact path="/tiktoe/">
        <TikToe />
      </Route>

      <Route exact path="/todo/">
        <Todo />
      </Route>

      <Route path="/404" component={NoMatch} />
      <Route path="*">
        <Redirect from={location.pathname} to="/404" />
      </Route>
    </Switch>
  );
};

export default AppRoutes;
