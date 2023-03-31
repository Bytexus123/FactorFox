import React from "react";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import user from "../dashboard/graph.json";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

interface PieChartProps {
  title: string;
}
const PieChart = ({ title }: PieChartProps) => {
  return (
    <Card>
      <CardHeader className="pt-3">
        <CardTitle className="mb-2">{title}</CardTitle>
      </CardHeader>
      <CardBody className="overflow-auto">
        <Pie
          data={{
            labels: user.map((label) => label.Text),
            datasets: [
              {
                label: "Advance %",
                data: user.map((label) => label.Percentage),
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
                hoverOffset: 20,
              },
            ],
          }}
          options={{ responsive: true }}
          style={{ maxHeight: "360px" }}
        />
      </CardBody>
    </Card>
  );
};

export default PieChart;
