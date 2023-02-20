import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title?: string
  chartData?: React.ReactNode | React.ReactNode[] | any;
}
const PieChart = ({ chartData }: PieChartProps) => {
  return (
    <Card>
      <CardHeader className="pt-3">
        <CardTitle className="mb-2">Aging Summary</CardTitle>
      </CardHeader>
      <CardBody className="overflow-auto">
        <Pie
          data={chartData}
          style={{ maxHeight: "360px" }}
          // className="d-block mx-auto"
           />
      </CardBody>
    </Card>
  );
};

export default PieChart;
