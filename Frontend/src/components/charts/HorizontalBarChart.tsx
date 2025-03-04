import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { getRiskToRewardRatio } from "../../utils/tradeUtils";
import { ChartProps } from "../../interfaces";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const HorizontalBarChart: React.FC<ChartProps> = ({ trades }) => {
  
    const riskToRewardRatio = getRiskToRewardRatio(trades);
  const totalRisk = riskToRewardRatio.totalRisk;
  const totalReward = riskToRewardRatio.totalReward;

  const data = {
    labels: ['Risk', 'Reward'],
    datasets: [
      {
        data: [totalRisk, totalReward],
        backgroundColor: ['lightred', 'lightgreen'],
        barThickness: 50
      }
    ]
  };

  return (
    <div>
      <Bar data={data} key="risk-reward-chart" />
    </div>
  );
};

export default HorizontalBarChart;
