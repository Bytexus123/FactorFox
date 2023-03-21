import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Col } from "reactstrap";
import RowSection from "../../common-components/row-section";
import { AllClientsChart, AllCustomerChart } from "./component";

const GraphChart = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Container fluid className="pt-3">
        <RowSection headerName="Graph">
          <Col xl={6} md={6}>
            <AllClientsChart title={`${t("graph.allClients")}`} />
          </Col>
          <Col xl={6} md={6}>
            <AllCustomerChart title={`${t("graph.allCustomers")}`} />
          </Col>
        </RowSection>
      </Container>
    </div>
  );
};

export default GraphChart;
