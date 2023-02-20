import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Redirect } from "react-router-dom";

interface LoginPageProps {
  email?: string;
  password?: string;
  Callback: any;
}

const LoginPage = ({ Callback }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => {
    setLoggedIn(true);
    Callback(true);
  };

  return (
    <>
      <div className="app-container" id="loginpage">
        <div className="h-100 bg-ultimate bg-animation">
          <div className="d-flex h-100vh justify-content-center align-items-center">
            <div className="mx-auto app-login-box col-md-8">
              <div className="app-logo-login mx-auto mb-3">
                <img
                  className="d-block mx-auto"
                  src="./images/factorfox.png"
                  alt="logo"
                  height={60}
                />
              </div>
              <div className="modal-dialog w-100 mx-auto">
                <div className="modal-content p-2">
                  {loggedIn && <Redirect to="/default" />}
                  <div className="modal-body mx-3 px-sm-3">
                    <div className="h5 modal-title text-center mb-3">
                      <h4 className="mt-4">Welcome</h4>
                      <label className="text-secondary small">
                        Please sign in to your account below.
                      </label>
                    </div>
                    <Form className="py-4">
                      <FormGroup>
                        <label
                          className="pb-1  d-block d-md-none"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text fixedWidth d-none d-md-block">
                              Username
                            </span>
                          </div>
                          <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={`${"Enter email Address "}`}
                            required
                          />
                        </div>
                      </FormGroup>

                      <FormGroup>
                        <label
                          className="pb-1  d-block d-md-none"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text fixedWidth d-none d-md-block ">
                              Password
                            </span>
                          </div>
                          <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={`${"Enter Password "}`}
                            required
                          />
                        </div>
                      </FormGroup>

                      <div className="mt-4 d-flex justify-content-end">
                        <Link
                          className="pe-3"
                          color="link"
                          to="/forget-password"
                        >
                          Forgot Password ?
                        </Link>
                        <Button
                          color="primary"
                          className="px-5"
                          onClick={login}
                        >
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="divider"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
