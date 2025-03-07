import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { calculateWinRate } from '../../utils/tradeUtils';
import { Doughnut } from 'react-chartjs-2';
import { ChartProps } from "../../interfaces";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC<ChartProps> = ({ trades }) => {
  
  const winRate = calculateWinRate(trades);
  const loseRate = 100 - winRate;
  
  const data = {
      labels: ['Wins', 'Losses'],
      datasets: [
          {
              data: [winRate, loseRate],
              backgroundColor: ['lightblue', 'lightgrey'],
              cutout: '55%',
              radius: '70%',
            }
        ]
  };

  return (
    <div>
      <Doughnut data={data} key="win-rate-chart" />
    </div>
  );
};

export default DoughnutChart;
