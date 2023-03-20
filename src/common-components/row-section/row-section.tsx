import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Container,
  Button,
  Collapse,
} from "reactstrap";

interface RowSectionProps {
  headerName: string;
  children?: any[] | JSX.Element | JSX.Element[];
}
const RowSection = ({ headerName, children }: RowSectionProps) => {
  const hid = headerName.replace(/\s+/g, "-").toLowerCase();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Row className="row-section" id={hid + "-row-section"}>
        <Col sm="12">
          <Card>
            <CardHeader
              className="fw-bold d-flex align-items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span>{headerName}</span>
              <Button color="transparent" className="ms-auto py-0">
                <i
                  className={`fa-regular collapse-icon ${
                    isOpen ? "fa-circle-arrow-up" : "fa-circle-arrow-down"
                  }`}
                ></i>
              </Button>
            </CardHeader>
            <Collapse isOpen={isOpen}>
              <CardBody className="p-2">
                <Container fluid className="px-0">
                  <Row>{children}</Row>
                </Container>
              </CardBody>
            </Collapse>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default RowSection;
