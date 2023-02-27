import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
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
import { validation } from "../validation/validation";

interface LoginPageProps {
  callback: (data: any) => void;
}

const LoginPage = ({ callback }: LoginPageProps) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });

  const handleLogin = (event: any) => {
    event.preventDefault();
    const errorData = validation(values);
    if (Object.keys(errorData).length == 0) {
      callback(true);
      return <Redirect to="/dashboard" />;
    } else {
      setError(errorData);
    }
  };

  const handleInput = (e: any) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
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
                    <Form className="mt-5" onSubmit={handleLogin}>
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
                            value={values.email}
                            onChange={handleInput}
                            placeholder={`${"Enter email Address "}`}
                          />
                        </InputGroup>
                        {error.email && (
                          <p style={{ color: "red" }}>{error.email}</p>
                        )}
                      </FormGroup>
                      <FormGroup>
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
                            value={values.password}
                            onChange={handleInput}
                            placeholder={`${"Enter Password "}`}
                          />
                        </InputGroup>
                        {error.password && (
                          <p style={{ color: "red" }}>{error.password}</p>
                        )}
                      </FormGroup>
                      <FormGroup className="text-end">
                        <Link
                          to={"/forgetpassword"}
                          className="px-0 btn btn-link"
                        >
                          Forgot Password?
                        </Link>
                      </FormGroup>
                      <FormGroup className="text-center">
                        <Button color="primary" className="px-5" type="submit">
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
