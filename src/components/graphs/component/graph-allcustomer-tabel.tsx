import React from "react";
import { Table } from "reactstrap";
import Data from "./customerData.json";

const GraphAllCustomerTabel = () => {
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
