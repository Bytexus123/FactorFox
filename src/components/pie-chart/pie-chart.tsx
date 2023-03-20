import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  title: string;
  chartData?: React.ReactNode | React.ReactNode[] | any;
}
const PieChart = ({ title }: PieChartProps) => {
  const chartData = {
    labels: ["0-30", "31-60", "61-90", "90+"],
    datasets: [
      {
        label: "Advances %",
        data: [0.76, 3.25, 0.17, 95.82],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="pt-3">
        <CardTitle className="mb-2">{title}</CardTitle>
      </CardHeader>
      <CardBody className="overflow-auto">
        {}
        <Pie data={chartData} style={{ maxHeight: "360px" }} />
      </CardBody>
    </Card>
  );
};

export default PieChart;
