import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ForgotPassword, LoginPage } from "./components/login-page";
import DashboardModel from "./components/dashboard";

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  const callback = (childData: boolean) => {
    setloggedIn(childData);
  };
  return (
    <div className="main-content">
      <Switch>
        <Route path="/dashboard">
          <DashboardModel />
        </Route>
        <Route exact path="/">
          {loggedIn ? (
            <Redirect to="/dashboard" />
          ) : (
            <LoginPage callback={callback} />
          )}
        </Route>
        <Route path="/forgetpassword">
          <ForgotPassword />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
