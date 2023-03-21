import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "reactstrap";
import Data from "./customerData.json";

const GraphAllCustomerTabel = () => {
  const { t } = useTranslation() 
  return (
    <div>
      <Table borderless size="sm">
        <thead>
          <tr>
          <th>{t('graph.clients')}</th>
            <th>{t('graph.percentage(%)')}</th>
            <th>{t('graph.amount')}</th>
          </tr>
          <tr>
          <th>{t('graph.avg./Total')}</th>
            <th>1.82</th>
            <th>14,380,927,260.11</th>
          </tr>
        </thead>
        <tbody>
          {Data.map((user, index) => (
            <tr key={index}>
              <td>{user.client}</td>
              <td>{user.percent}</td>
              <td>{user.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GraphAllCustomerTabel;
