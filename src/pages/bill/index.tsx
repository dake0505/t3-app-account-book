import {
    CategoryScale,
    Chart as ChartJS,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
);

const MyLineChart = () => {
  return (
      <Line
        data={{
          labels: [
            "2023-01",
            "2023-02",
            "2023-03",
            "2023-04",
            "2023-05",
            "2023-06",
            "2023-07",
          ],
          datasets: [
            {
              data: [100, 120, 115, 134, 168, 132, 200],
              backgroundColor: "purple",
            },
          ],
        }}
      />
  );
};

const Bill = () => {
    return (
        <div className="relative flex h-screen overflow-scroll bg-default-bg flex-col px-6 py-10 text-white">
            <p className="text-2xl font-bold mb-6">2022-08</p>
            <div className="flex justify-center">
                <MyLineChart />
            </div>
        </div>
    );
};

export default Bill;
