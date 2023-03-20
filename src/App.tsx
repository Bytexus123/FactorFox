import React, { Suspense, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ForgotPassword, LoginPage } from "./components/login-page";
import DashboardModel from "./components/dashboard";
import Cookies from "js-cookie";

const App = () => {
  const [loggedIn, setloggedIn] = useState(
    JSON.parse(Cookies.get("loggedIn") || "false")
  );

  const setLogin = (data: boolean) => {
    const status = data.toString();
    Cookies.set("loggedIn", status);
    setloggedIn(data);
  };
  return (
    <>
      <Suspense fallback="Loading...">
        <Switch>
          <Route path="/dashboard">
            <DashboardModel loginStatus={setLogin} />
          </Route>
          <Route exact path="/">
            {loggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
              <LoginPage loginStatus={setLogin} />
            )}
          </Route>
          <Route path="/forgetpassword">
            <ForgotPassword />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
