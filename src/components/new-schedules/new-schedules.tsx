import React from "react";
import { Container, Row, Col, TabPane, Table } from "reactstrap";
import CoulmnSection from "../../common-components/coulmn-section";
import RowSection from "../../common-components/row-section";
import TabColumn from "../../common-components/tab-column";
import { useTranslation } from "react-i18next";

const NewSchedules = () => {
  const { t } = useTranslation()
  return (
    <>
      <Container fluid className="pt-3">
        <RowSection headerName={t('newSchedules.newSchedules')}>
          <Col xl={4} md={6}>
            <CoulmnSection title={`${t("newSchedules.recentEntries")}`}>
              <Table striped responsive size="sm" className="small">
                <thead className="small">
                  <tr>
                    <th>{t('newSchedules.schedule')}</th>
                    <th></th>
                    <th>{t('newSchedules.scheduleAmount')}</th>
                    <th>{t('newSchedules.paymentType')}</th>
                    <th>{t('newSchedules.submittedDate')}</th>
                    <th>{t('newSchedules.submittedTime')}</th>
                    <th>{t('newSchedules.createdDate')}</th>

                  </tr>
                </thead>
                <tbody className="small">
                  <tr>
                    <td>
                      <a href="#">000S-5565</a>
                    </td>
                    <td></td>
                    <td>10,000.00</td>
                    <td>ACH</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>01/02/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">0001</a>
                    </td>
                    <td></td>
                    <td>3,000.00</td>
                    <td>ACH</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>01/02/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">000S-5564</a>
                    </td>
                    <td></td>
                    <td>20,000.00</td>
                    <td>ACH</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>01/02/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">0004</a>
                    </td>
                    <td></td>
                    <td>1500.00</td>
                    <td>ACH</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>01/02/23</td>
                  </tr>
                  <tr>
                    <td>
                      <a href="#">0004</a>
                    </td>
                    <td></td>
                    <td>1500.00</td>
                    <td>ACH</td>
                    <td>NA</td>
                    <td>NA</td>
                    <td>01/02/23</td>
                  </tr>
                </tbody>
              </Table>
            </CoulmnSection>
          </Col>
          <Col xl={4} md={6}>
            <CoulmnSection title={`${t('newSchedules.approvedAdvances')}`}>
              <Table striped responsive size="sm" className="small">
                <thead className="small">
                  <tr>
                    <th>{t('newSchedules.paymentType')}</th>
                    <th>{t('newSchedules.totalScheduleAmount')}</th>
                  </tr>
                </thead>
                <tbody className="small">
                  <tr>
                    <td>EFT</td> 
                    <td>5,040,942.01</td>
                  </tr>
                  <tr>
                    <td>ACH</td>
                    <td>5,212,376.05</td>
                  </tr>
                  <tr>
                    <td>EFS</td>
                    <td>79,943.30</td>
                  </tr>
                  <tr>
                    <td>COMDATA</td>
                    <td>1,550.00</td>
                  </tr>
                  <tr>
                    <td>CITICC</td>
                    <td>12,455.00</td>
                  </tr>
                </tbody>
                <tfoot className="small">
                  <tr>
                    <th>{t('newSchedules.totalAmount')}:</th>
                    <th>210,747,771.36</th>
                  </tr>
                </tfoot>
              </Table>
            </CoulmnSection>
          </Col>
          <Col xl={4} md={6}>
            <CoulmnSection title={`${t('newSchedules.prospects')}`} >
              <TabColumn tabTitles={[t('newSchedules.customers'), t('newSchedules.clients')]}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12" className="pt-3">
                      <Table striped responsive size="sm" className="small">
                        <thead className="small">
                          <tr>
                            <th>{t('newSchedules.company')}</th>
                            <th>{t('newSchedules.motorCarrier')}</th>
                            <th>{t('newSchedules.phone#')}</th>
                            <th>{t('newSchedules.createdBy')}</th>
                            <th>{t('newSchedules.submittedDate')}</th>
                          </tr>
                        </thead>
                        <tbody className="small">
                          <tr>
                            <td>
                              <a href="#">Aptimust Customer </a>
                            </td>
                            <td>19022023</td>
                            <td>987678765</td>
                            <td>Arlen</td>
                            <td>30/09/22</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Dispin Prospective Customer</a>
                            </td>
                            <td>545</td>
                            <td>987678765</td>
                            <td>Arlen</td>
                            <td>30/09/22</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Doms Prospective Customer</a>
                            </td>
                            <td>0</td>
                            <td>987678765</td>
                            <td>Arlen</td>
                            <td>30/09/22</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">dsfds</a>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Aptimust Customer</a>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col sm="12" className="pt-3">
                      <Table striped responsive size="sm" className="small">
                        <thead className="small">
                          <tr>
                            <th>Company</th>
                            <th>Motor Carrier</th>
                            <th>Phone#</th>
                            <th>Created By</th>
                            <th>Submitted Date</th>
                          </tr>
                        </thead>
                        <tbody className="small">
                          <tr>
                            <td>
                              <a href="#">Aptimust Customer </a>
                            </td>
                            <td>19022023</td>
                            <td>987678765</td>
                            <td>Arlen</td>
                            <td>30/09/22</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Dispin Prospective Customer</a>
                            </td>
                            <td>545</td>
                            <td>987678765</td>
                            <td>Arlen</td>
                            <td>30/09/22</td>
                          </tr>
                          <tr>
                            <td>
                              <a href="#">Doms Prospective Customer</a>
                            </td>
                            <td>0</td>
                            <td>987678765</td>
                            <td>Arlen</td>
                            <td>30/09/22</td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                </TabPane>
              </TabColumn>
            </CoulmnSection>
          </Col>
        </RowSection>
      </Container>
    </>
  );
};

export default NewSchedules;