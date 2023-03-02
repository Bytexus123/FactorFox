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
  Label,
  Row,
} from "reactstrap";
import CompanyLogo from "../../common-components/company-logo";

interface ForgotPasswordProps {
  email?: string;
}

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    console.log(email);
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
                        Enter your Email to Reset the Password
                      </p>
                    </div>

                    <Form className="mt-5">
                      <FormGroup>
                        <Label for="email" className="d-block d-sm-none">
                          Email
                        </Label>
                        <InputGroup>
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
                        <Link to={"/"} className="btn btn-link">
                          Return to Login
                        </Link>
                      </FormGroup>

                      <FormGroup className=" text-center">
                        <Button color="primary" onClick={handleForgotPassword}>
                          Reset Password
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

export default ForgotPassword;
