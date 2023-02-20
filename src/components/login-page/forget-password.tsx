import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

interface LoginPageProps {
  email?: string;
}

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    console.log(email);
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
                  <div className="modal-body mx-3 px-sm-3">
                    <div className="h5 modal-title text-center mb-3">
                      <h4 className="mt-4"> Reset Your Password </h4>
                      <label className="text-secondary small fs-6">
                        We’ll email you instructions to reset your password.
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

                      <div className="mt-5 d-flex justify-content-end ">
                        <Link to="/"> Return to Login </Link>
                        <Button color="primary" onClick={handleForgotPassword}>
                          Reset Password
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

export default ForgotPassword;
