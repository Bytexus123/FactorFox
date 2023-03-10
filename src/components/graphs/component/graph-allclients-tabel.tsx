import React from "react";
import { Table } from "reactstrap";
import clientData from "./clientData.json";

const GraphAllClientsTabel = () => {
  return (
    <div>
      <Table borderless size="sm">
        <thead>
          <tr>
            <th>Client</th>
            <th>Percent(%)</th>
            <th>Amount</th>
          </tr>
          <tr>
            <th>Avg./Total</th>
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
