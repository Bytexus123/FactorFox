import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import GraphAllClientsTabel from "./graph-allclients-tabel";
import clientData from "./clientData.json";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale);

interface AllClientsChartProps {
  title: string;
  type?: string;
}

const AllClientsChart = ({ title }: AllClientsChartProps) => {
  return (
    <div>
      <Card>
        <CardHeader className="pt-3">
          <CardTitle className="mb-2">{title}</CardTitle>
        </CardHeader>
        <CardBody className="overflow-auto">
          <Pie
            data={{
              labels: clientData.map((label) => label.client),
              datasets: [
                {
                  label: "Percent (%)",
                  data: clientData.map((label) => label.percent),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(87, 40, 145, 0.8)",
                    "rgba(87, 116, 145, 0.8)",
                    "rgba(87, 116, 23, 0.8)",
                    "rgba(199, 116, 23, 1)",
                    "rgba(199, 197, 101, 1)",
                    "rgba(199, 197, 0, 1)",
                    "rgba(0, 0, 255, 0.57)",
                    "rgba(0, 157, 132, 0.57)",
                    "rgba(255, 45, 255, 1)",
                  ],
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(104, 59, 15, 1)",
                    "rgba(104, 107, 15, 1)",
                    "rgba(104, 107, 83, 1)",
                    "rgba(0, 11, 84, 0.81)",
                    "rgba(117, 11, 84, 0.81)",
                    "rgba(255, 0, 120, 1)",
                    "rgba(148, 176, 112, 1)",
                    "rgba(218, 176, 112, 1)",
                    "rgba(218, 105, 112, 1)",
                  ],
                  borderWidth: 1,
                  hoverOffset: 20,
                },
              ],
            }}
            options={{ responsive: true, layout: { padding: 10 } }}
            style={{ maxHeight: "360px" }}
          />
          <GraphAllClientsTabel />
        </CardBody>
      </Card>
    </div>
  );
};

export default AllClientsChart;
