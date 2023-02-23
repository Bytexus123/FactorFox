import React from 'react'
import { Table } from "reactstrap";

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
        </thead>
        <tbody>
          <tr>
            <th>Avg./Total</th>
            <th>1.75</th>
            <th>16,976,384,452.19</th>
          </tr>
          <tr>
            <td>XYZ Pvt ltd</td>
            <td>52.89</td>
            <td>8,978,667,857.00</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default GraphAllCustomerTabel