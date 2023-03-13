import React, { useEffect } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import CoulmnSection from "../../common-components/coulmn-section";
import RowSection from "../../common-components/row-section";
import TabColumn from "../../common-components/tab-column";
import NewSchedules from "../new-schedules/new-schedules";
import PieChart from "../pie-chart";
import Header from "../header";
import NaviagtionModel from "../navigation/navigation-model";
import DashboardChart from "../graphs/graph-chart";
import { Redirect } from "react-router-dom";

interface DashboardModelProps {
  isloggedIn?: boolean;
  loginStatus: (data: any) => void;
}

const DashboardModel = ({ isloggedIn, loginStatus }: DashboardModelProps) => {
  const setCardHeight = () => {
    const rs = document.querySelectorAll<HTMLElement>(".section");
    rs.forEach((r) => {
      const cards = r.querySelectorAll<HTMLElement>(".collapse .card");
      const cardHeight = Math.max(
        ...Array.from(cards).map((c) => c.clientHeight)
      );

      cards.forEach((c) => {
        c.style.height = `${cardHeight}px`;
        c.style.maxHeight = "500px";
      });
    });
  };
  useEffect(() => {
    document.title = "FF Dashboard";
    setCardHeight();
    (!isloggedIn) &&
      <Redirect to="/" />;

  }, []);

  return (
    <div className="content">
      <Header />
      <NaviagtionModel />
      <Container fluid className="pt-3">
        <RowSection headerName="Performance">
          <Col xl={4} md={6}>
            <CoulmnSection>
              <TabColumn tabTitles={["ADV", "INV"]}>
                <Row>
                  <Col sm="12" className="pt-3">
                    <Table striped responsive size="sm" className="small">
                      <thead className="small">
                        <tr>
                          <th className="text-left"></th>
                          <th className="text-left"></th>
                          <th className="text-right ng-binding">Count</th>

                          <th className="text-right ng-binding">Advance Due</th>
                          <th className="text-right">%</th>
                        </tr>
                      </thead>
                      <tbody className="small">
                        <tr
                          ng-if="!showCustomfield('CapitalNow')"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <b className="ng-binding">Total</b>
                          </td>
                          <td className="text-right ng-binding">751</td>
                          <td className="text-right ng-binding">
                            13,067,760.48
                          </td>
                          <td className="text-right"></td>
                        </tr>

                        <tr
                          ng-if="ARList.length > 0"
                          ng-repeat="item in resultValue=(ARList)"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <a
                              href="#"
                              ng-click="GetDetailsOfData(item);"
                              className="ng-binding"
                            >
                              0-30
                            </a>
                          </td>
                          <td className="text-right ng-binding">125</td>

                          <td className="text-right ng-binding">156,886.66</td>
                          <td className="text-right ng-binding">1.20</td>
                        </tr>
                        <tr
                          ng-if="ARList.length > 0"
                          ng-repeat="item in resultValue=(ARList)"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <a
                              href="#"
                              ng-click="GetDetailsOfData(item);"
                              className="ng-binding"
                            >
                              31-60
                            </a>
                          </td>
                          <td className="text-right ng-binding">39</td>

                          <td className="text-right ng-binding">347,680.00</td>
                          <td className="text-right ng-binding">2.66</td>
                        </tr>

                        <tr
                          ng-if="ARList.length > 0"
                          ng-repeat="item in resultValue=(ARList)"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <a
                              href="#"
                              ng-click="GetDetailsOfData(item);"
                              className="ng-binding"
                            >
                              61-90
                            </a>
                          </td>
                          <td className="text-right ng-binding">22</td>

                          <td className="text-right ng-binding">24,499.00</td>
                          <td className="text-right ng-binding">0.19</td>
                        </tr>
                        <tr
                          ng-if="ARList.length > 0"
                          ng-repeat="item in resultValue=(ARList)"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <a
                              href="#"
                              ng-click="GetDetailsOfData(item);"
                              className="ng-binding"
                            >
                              90+
                            </a>
                          </td>
                          <td className="text-right ng-binding">565</td>

                          <td className="text-right ng-binding">
                            12,538,694.82
                          </td>
                          <td className="text-right ng-binding">95.95</td>
                        </tr>

                        <tr>
                          <td ng-if="ARList.length > 0" className="ng-scope">
                            <a
                              href="#"
                              ng-click="ShowMoreArInvoice()"
                              className="ng-binding"
                            >
                              More
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>

                <Row>
                  <Col sm="12" className="pt-3">
                    <Table striped responsive size="sm" className="small">
                      <thead>
                        <tr>
                          <th className="text-left"></th>
                          <th className="text-left"></th>
                          <th className="text-right ng-binding">Count</th>

                          <th className="text-right ng-binding">Advance Due</th>
                          <th className="text-right">%</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          ng-if="!showCustomfield('CapitalNow')"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <b className="ng-binding">Total</b>
                          </td>
                          <td className="text-right ng-binding">780</td>
                          <td className="text-right ng-binding">
                            14,729,304.58
                          </td>
                          <td className="text-right"></td>
                        </tr>

                        <tr
                          ng-if="ARList.length > 0"
                          ng-repeat="item in resultValue=(ARList)"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <a
                              href="#"
                              ng-click="GetDetailsOfData(item);"
                              className="ng-binding"
                            >
                              0-30
                            </a>
                          </td>
                          <td className="text-right ng-binding">45</td>

                          <td className="text-right ng-binding">54,875.00</td>
                          <td className="text-right ng-binding">0.37</td>
                        </tr>
                        <tr
                          ng-if="ARList.length > 0"
                          ng-repeat="item in resultValue=(ARList)"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <a
                              href="#"
                              ng-click="GetDetailsOfData(item);"
                              className="ng-binding"
                            >
                              31-60
                            </a>
                          </td>
                          <td className="text-right ng-binding">70</td>

                          <td className="text-right ng-binding">412,220.00</td>
                          <td className="text-right ng-binding">2.80</td>
                        </tr>

                        <tr
                          ng-if="ARList.length > 0"
                          ng-repeat="item in resultValue=(ARList)"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <a
                              href="#"
                              ng-click="GetDetailsOfData(item);"
                              className="ng-binding"
                            >
                              61-90
                            </a>
                          </td>
                          <td className="text-right ng-binding">19</td>

                          <td className="text-right ng-binding">52,940.00</td>
                          <td className="text-right ng-binding">0.36</td>
                        </tr>
                        <tr
                          ng-if="ARList.length > 0"
                          ng-repeat="item in resultValue=(ARList)"
                          className="ng-scope"
                        >
                          <td></td>
                          <td className="text-left">
                            <a
                              href="#"
                              ng-click="GetDetailsOfData(item);"
                              className="ng-binding"
                            >
                              90+
                            </a>
                          </td>
                          <td className="text-right ng-binding">646</td>

                          <td className="text-right ng-binding">
                            14,209,269.58
                          </td>
                          <td className="text-right ng-binding">96.47</td>
                        </tr>

                        <tr>
                          <td ng-if="ARList.length > 0" className="ng-scope">
                            <a
                              href="#"
                              ng-click="ShowMoreArInvoice()"
                              className="ng-binding"
                            >
                              More
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabColumn>
            </CoulmnSection>
          </Col>
          <Col xl={4} md={6}>
            <PieChart title="Aging Summary" />
          </Col>
          <Col xl={4} md={6}>
            <CoulmnSection>
              <TabColumn tabTitles={["Day", "Month", "YTD"]}>
                <Row>
                  <Col sm="12" className="pt-3">
                    <Table striped responsive size="sm" className="small">
                      <tbody className="small">
                        <tr>
                          <td>Invoice Purchased by Invoice Date</td>
                          <td className="text-right">€146,060.00</td>
                        </tr>
                        <tr>
                          <td>Net Advances by Advance Date</td>
                          <td className="text-right">€109,201.79</td>
                        </tr>
                        <tr>
                          <td>Advance Discounts</td>
                          <td className="text-right">€664.48</td>
                        </tr>
                        <tr>
                          <td>Received Discounts</td>
                          <td className="text-right">€559,258.06</td>
                        </tr>
                        <tr>
                          <td>Total Receipts</td>
                          <td className="text-right">€4,909,121.20</td>
                        </tr>

                        <tr>
                          <td>Total Chargebacks</td>
                          <td className="text-right">€800.00</td>
                        </tr>
                        <tr>
                          <td>Advance Chargebacks</td>
                          <td className="text-right">€800.00</td>
                        </tr>
                        <tr>
                          <td>Discount Chargebacks</td>
                          <td className="text-right">€0.00</td>
                        </tr>

                        <tr>
                          <td>Paid Fuel Adv</td>
                          <td className="text-right">€110.00</td>
                        </tr>
                        <tr>
                          <td>Paid Pre-Funds</td>
                          <td className="text-right">€0.00</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="pt-3">
                    <Table striped responsive size="sm" className="small">
                      <tbody className="small">
                        <tr>
                          <td>Invoice Purchased by Invoice Date</td>
                          <td className="text-right">€146,060.00</td>
                        </tr>
                        <tr>
                          <td>Net Advances by Advance Date</td>
                          <td className="text-right">€109,201.79</td>
                        </tr>
                        <tr>
                          <td>Advance Discounts</td>
                          <td className="text-right">€664.48</td>
                        </tr>
                        <tr>
                          <td>Received Discounts</td>
                          <td className="text-right">€559,258.06</td>
                        </tr>
                        <tr>
                          <td>Total Receipts</td>
                          <td className="text-right">€4,909,121.20</td>
                        </tr>

                        <tr>
                          <td>Total Chargebacks</td>
                          <td className="text-right">€800.00</td>
                        </tr>
                        <tr>
                          <td>Advance Chargebacks</td>
                          <td className="text-right">€800.00</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="pt-3">
                    <Table striped responsive size="sm" className="small">
                      <tbody className="small">
                        <tr>
                          <td>Invoice Purchased by Invoice Date</td>
                          <td className="text-right">€146,060.00</td>
                        </tr>
                        <tr>
                          <td>Net Advances by Advance Date</td>
                          <td className="text-right">€109,201.79</td>
                        </tr>
                        <tr>
                          <td>Advance Discounts</td>
                          <td className="text-right">€664.48</td>
                        </tr>
                        <tr>
                          <td>Received Discounts</td>
                          <td className="text-right">€559,258.06</td>
                        </tr>
                        <tr>
                          <td>Total Receipts</td>
                          <td className="text-right">€4,909,121.20</td>
                        </tr>

                        <tr>
                          <td>Total Chargebacks</td>
                          <td className="text-right">€800.00</td>
                        </tr>
                        <tr>
                          <td>Advance Chargebacks</td>
                          <td className="text-right">€800.00</td>
                        </tr>
                        <tr>
                          <td>Discount Chargebacks</td>
                          <td className="text-right">€0.00</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </TabColumn>
            </CoulmnSection>
          </Col>
        </RowSection>
      </Container>
      <NewSchedules />
      <DashboardChart />
    </div>
  );
};

export default DashboardModel;
