import React from "react";
import { Container, Col } from "reactstrap";
import CoulmnSection from "../../common-components/coulmn-section";
import RowSection from "../../common-components/row-section";
import {
  AllClientsChart,
  AllCustomerChart,
  GraphAllClientsTabel,
  GraphAllCustomerTabel,
} from "./component";

const GraphChart = () => {
  return (
    <div>
      <Container fluid className="pt-3">
        <RowSection headerName="Graph">
          <Col xl={6} md={6}>
            <AllClientsChart title="All Client" />
            <GraphAllClientsTabel />
          </Col>
          <Col xl={6} md={6}>
            <AllCustomerChart title="All Costumer" />
            <GraphAllCustomerTabel />
          </Col>
        </RowSection>
      </Container>
    </div>
  );
};

export default GraphChart;
