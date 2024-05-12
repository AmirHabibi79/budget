import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { expenseWithPercentage } from "../types/expense";
import lodash from "lodash";
type props = {
  Data: expenseWithPercentage[];
  LabelOn: string;
  DataOn: string;
  Colors: string[];
  Label: string;
};
export default function PieChart({
  Data,
  LabelOn,
  DataOn,
  Colors,
  Label,
}: props) {
  ChartJS.register(ArcElement, Tooltip);
  const labels = lodash.map(Data, LabelOn);
  const values = lodash.map(Data, DataOn);
  const data = {
    labels,
    datasets: [
      {
        label: Label,
        data: values,
        backgroundColor: Colors,
      },
    ],
  };
  return <Pie data={data} />;
}
