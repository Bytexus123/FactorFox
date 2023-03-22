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
import { useTranslation } from "react-i18next";
import day from './day.json'
import month from './month.json'
import year from './year.json'
import Adv from './Adv.json'
import Inv from './Inv.json'

interface DashboardModelProps {
  isloggedIn?: boolean;
  loginStatus: (data: any) => void;
}

const DashboardModel = ({ isloggedIn }: DashboardModelProps) => {
  const { t } = useTranslation();
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
    !isloggedIn && <Redirect to="/" />;
  }, []);

  return (
    <div className="content">
      <Header />
      <NaviagtionModel />
      <Container fluid className="pt-3">
        <RowSection headerName={t("dashboard.performance")}>
          <Col xl={4} md={6}>
            <CoulmnSection>
              <TabColumn tabTitles={[t('dashboard.adv'), t('dashboard.inv')]}>
                <Row>
                  <Col sm="12" className="pt-3">
                    <Table striped responsive size="sm" className="small">
                      <thead className="small">
                        <tr>
                          <th className="text-left"></th>
                          <th className="text-left"></th>
                          <th className="text-right ng-binding">
                            {t("dashboard.count")}
                          </th>

                          <th className="text-right ng-binding">
                            {t("dashboard.advancedue")}
                          </th>
                          <th className="text-right">%</th>
                        </tr>
                      </thead>
                      <tbody className="small">
                        <td></td>
                        <td className="text-left">
                          <b className="ng-binding">{t("dashboard.total")}</b>
                        </td>
                        {Adv.map(data => (
                          <>
                            <tr
                              ng-if="!showCustomfield('CapitalNow')"
                              className="ng-scope"
                            >
                              <td></td>
                              <td className="text-right">
                                <a
                                  href="#"
                                  ng-click="GetDetailsOfData(item);"
                                  className="ng-binding"
                                >{data.totalsp}</a>
                              </td>
                              <td className="text-right">
                                {data.count}
                              </td>
                              <td className="text-right">
                                {data.advancedue}
                              </td>
                              <td className="text-right">
                                {data.percent}
                              </td>
                            </tr>
                          </>
                        ))}
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
                          <th className="text-right ng-binding">{t("dashboard.count")}</th>

                          <th className="text-right ng-binding">{t("dashboard.advancedue")}</th>
                          <th className="text-right">%</th>
                        </tr>
                      </thead>
                      <tbody>
                      <td></td>
                        <td className="text-left">
                          <b className="ng-binding">{t("dashboard.total")}</b>
                        </td>
                      {Inv.map(data => (
                          <>
                            <tr
                              ng-if="!showCustomfield('CapitalNow')"
                              className="ng-scope"
                            >
                              <td></td>
                              <td className="text-right">
                                <a
                                  href="#"
                                  ng-click="GetDetailsOfData(item);"
                                  className="ng-binding"
                                >{data.totalsp}</a>
                              </td>
                              <td className="text-right">
                                {data.count}
                              </td>
                              <td className="text-right">
                                {data.advancedue}
                              </td>
                              <td className="text-right">
                                {data.percent}
                              </td>
                            </tr>
                          </>
                        ))}

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
            <PieChart title={`${t('dashboard.agingSummary')}`} />
          </Col>
          <Col xl={4} md={6}>
            <CoulmnSection>
              <TabColumn tabTitles={[t('dashboard.day'), t('dashboard.month'), t('dashboard.ytd')]}>
                <Row>
                  <Col sm="12" className="pt-3">
                    <Table striped responsive size="sm" className="small">
                      <tbody className="small">
                        {day.map(data => (
                          <tr>
                            <td>{data.day}</td>
                            <td>{data.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="pt-3">
                    <Table striped responsive size="sm" className="small">
                      <tbody className="small">
                        {month.map(data => (
                          <tr>
                            <td>{data.month}</td>
                            <td>{data.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
                <Row>
                  <Col sm="12" className="pt-3">
                    <Table striped responsive size="sm" className="small">
                      <tbody className="small">
                        {year.map(data => (
                          <tr>
                            <td>{data.year}</td>
                            <td>{data.value}</td>
                          </tr>
                        ))}
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
