import React from "react";
import { Table } from "reactstrap";

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
        </thead>
        <tbody>
          <tr>
          <th>Avg./Total</th>
            <th>1.92</th>
            <th>16,976,384,452.19</th>
          </tr>
          <tr>
            <td>18 Dec New</td>
            <td>52.89</td>
            <td>8,979,299,642.00</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default GraphAllClientsTabel;
