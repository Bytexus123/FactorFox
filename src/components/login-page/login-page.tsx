import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Row,
} from "reactstrap";
import CompanyLogo from "../../common-components/company-logo";
import validateInfo from "../../validation/validation";

interface LoginPageProps {
  email?: string;
  password?: string;
  Callback: any;
}

const LoginPage = ({ Callback }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({})

  const login = () => {
    Callback(true);
    // setError(validateInfo(values))
  };

  return (
    <>
      <div className="login">
        <Container>
          <Row>
            <Col
              xl={5}
              lg={6}
              md={8}
              sm={12}
              className="vh-100 mx-auto d-flex align-items-center"
            >
              <Container className="login-form py-4 shadow rounded">
                <Row>
                  <Col className="border-bottom">
                    <div className="logo-section text-center my-3 ">
                      <CompanyLogo height={40} />
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col sm={10} className="mx-auto">
                    <div className="text-center my-4">
                      <h3 className="fw-bold">Welcome</h3>
                      <p className="small text-black-50 fw-semibold ">
                        Please Sign In to your Account
                      </p>
                    </div>

                    <Form className="mt-5">
                      <FormGroup>
                        <Label for="email" className="d-block d-sm-none">
                          Username
                        </Label>
                        <InputGroup>
                          <InputGroupText className="d-none d-sm-inline">
                            <i className="bi bi-person-fill pe-2 "></i>
                            Username
                          </InputGroupText>
                          <Input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={`${"Enter email Address "}`}
                            required
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="text-end">
                        <Label for="password" className="d-block d-sm-none">
                          Password
                        </Label>
                        <InputGroup>
                          <InputGroupText className="d-none d-sm-inline">
                            <i className="bi bi-key-fill pe-2 "></i>
                            Password&nbsp;
                          </InputGroupText>
                          <Input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder={`${"Enter Password "}`}
                            required
                          />
                        </InputGroup>
                        <Link
                          to={"/forgetpassword"}
                          className="px-0 btn btn-link"
                        >
                          Forgot Password?
                        </Link>
                      </FormGroup>
                      <FormGroup className="text-center">
                        <Button
                          color="primary"
                          className="px-5"
                          onClick={login}
                        >
                          Login
                        </Button>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
