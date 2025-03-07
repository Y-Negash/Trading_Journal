import { Chart as ChartJS, BarElement, Tooltip, CategoryScale, LinearScale, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { getRiskToRewardRatio } from "../../utils/tradeUtils";
import { ChartProps } from "../../interfaces";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale);

const HorizontalBarChart: React.FC<ChartProps> = ({ trades }) => {
  
    const riskToRewardRatio = getRiskToRewardRatio(trades);
  const totalRisk = riskToRewardRatio.totalRisk;
  const totalReward = riskToRewardRatio.totalReward;

  const data = {
    labels: ['Risk', 'Reward'],
    datasets: [
      {
        data: [totalRisk, totalReward],
        backgroundColor: ['darkred', 'green'],
        barThickness: 50
      }
    ]
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      }
    }
  };
  return (
    <div>
      <Bar data={data} key="risk-reward-chart" options={options} />
    </div>
  );
};

export default HorizontalBarChart;
