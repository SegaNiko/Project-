import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import Api from "../../pages/Api/Api";
import TikToe from "../../pages/TikToe/TikToe";
import Todo from "../../pages/Todo/Todo";
import NoMatch from "../../components/NoMatch/NoMatch";

const Routes = () => {
  const location = useLocation();

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/api">
        <Api />
      </Route>

      <Route exact path="/tiktoe">
        <TikToe />
      </Route>

      <Route exact path="/todo">
        <Todo />
      </Route>

      <Route path="/404" component={NoMatch} />
      <Route path="*">
        <Redirect from={location.pathname} to="/404" />
      </Route>
    </Switch>
  );
};

export default Routes;
