import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { calculateWinRate } from '../../utils/tradeUtils';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutProps } from "../../interfaces";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC<DoughnutProps> = ({ trades }) => {
  
  const winRate = calculateWinRate(trades);
  const loseRate = 100 - winRate;
  
  const data = {
      labels: ['Wins', 'Losses'],
      datasets: [
          {
              data: [winRate, loseRate],
              backgroundColor: ['blue', 'lightgrey'],
              cutout: '55%',
              borderColor: ['black'],
              radius: '70%',
            }
        ]
  };

  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutChart;
