import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { calculateWinRate } from '../../utils/tradeUtils';
import { Doughnut } from 'react-chartjs-2';
import { ChartProps } from "../../interfaces";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC<ChartProps> = ({ trades }) => {
  
  const winRate = calculateWinRate(trades);
  const loseRate = (100 - winRate).toFixed(0);
  
  const data = {
      labels: ['Wins', 'Losses'],
      datasets: [
          {
              data: [winRate, loseRate],
              backgroundColor: ['lightblue', 'lightgrey'],
              cutout: '55%',
            }
        ]
  };

  const options:ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw; 

            return ` ${value}%`; 
          }}
      }
    }
  }

  return (
    <section aria-labelledby="win-rate" className="doughnut-chart chart">
          <h3 id="win-rate" className="sr-only">Win Rate Chart</h3>
          <div id='doughnut'>
            <Doughnut data={data} options={options} />
          </div>
          <h2 className="chart-title">Win Rate</h2>
    </section>
  );
};

export default DoughnutChart;
