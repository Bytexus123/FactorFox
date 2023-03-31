import React from "react";
import { useTranslation } from "react-i18next";
import { Table } from "reactstrap";
import clientData from "./clientData.json";

const GraphAllClientsTabel = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Table borderless size="sm">
        <thead>
          <tr>
            <th>{t("graph.allClients")}</th>
            <th>{t("graph.percent(%)")}</th>
            <th>{t("graph.amount")}</th>
          </tr>
          <tr>
            <th>{t("graph.avg./Total")}</th>
            <th>1.75</th>
            <th>16,976,384,452.19</th>
          </tr>
        </thead>
        <tbody>
          {clientData.map((user, index) => (
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

export default GraphAllClientsTabel;
