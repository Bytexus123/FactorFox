import React from "react";
import { Container, Row, Col, TabPane, Table } from "reactstrap";
import CoulmnSection from "../../common-components/coulmn-section";
import RowSection from "../../common-components/row-section";
import TabColumn from "../../common-components/tab-column";
import { useTranslation } from "react-i18next";
import recentEntries from './RecentEntries.json'
import data from './ApprovedAdvance.json'
import client from './client.json'
import customer from './Customer.json'

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
                    <th>{t('newSchedules.scheduleAmount')}</th>
                    <th>{t('newSchedules.paymentType')}</th>
                    <th>{t('newSchedules.submittedDate')}</th>
                    <th>{t('newSchedules.submittedTime')}</th>
                    <th>{t('newSchedules.createdDate')}</th>
                  </tr>
                </thead>
                <tbody className="small">
                  {recentEntries.map((entry) =>(
                    <tr>
                      <td><a href="#">{entry.schedule}</a></td>
                      <td>{entry.scheduleAmount}</td>
                      <td>{entry.paymentType}</td>
                      <td>{entry.submittedDate}</td>
                      <td>{entry.submittedTime}</td>
                      <td>{entry.createdDate}</td>
                    </tr>
                  ))}
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
                  {data.map((data)=>(
                    <tr>
                      <td>{data.paymentType}</td>
                      <td>{data.TotalScheduleAmount}</td>
                    </tr>
                  ))}
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
                          {customer.map((data)=>(
                            <tr>
                              <td><a href="#">{data.Company}</a></td>
                              <td>{data.Motorcarrier}</td>
                              <td>{data.Phone}</td>
                              <td>{data.CreatedBy}</td>
                              <td>{data.SubmittedDate}</td>
                            </tr>
                          ))}
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
                        {client.map((data)=>(
                            <tr>
                              <td><a href="#">{data.Company}</a></td>
                              <td>{data.Motorcarrier}</td>
                              <td>{data.Phone}</td>
                              <td>{data.CreatedBy}</td>
                              <td>{data.SubmittedDate}</td>
                            </tr>
                          ))}
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