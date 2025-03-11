import { Chart as ChartJS, BarElement, Tooltip, CategoryScale, LinearScale, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";
import { getRiskToRewardRatio } from "../../utils/tradeUtils";
import { ChartProps } from "../../interfaces";

ChartJS.register(BarElement, Tooltip, CategoryScale, LinearScale);

const HorizontalBarChart: React.FC<ChartProps> = ({ trades }) => {
  
  const riskToRewardRatio = getRiskToRewardRatio(trades);
  const totalRisk = riskToRewardRatio.totalRisk;
  const totalReward = riskToRewardRatio.totalReward;

  let ratio = getRiskToRewardRatio(trades).ratio.toFixed(0);
   if(trades.length === 0){
    ratio = '0';
   }

  const data = {
    labels: ['Risk', 'Reward'],
    datasets: [
      {
        data: [totalRisk, totalReward],
        backgroundColor: ['rgb(251, 197, 197, 0.8)', 'rgb(205, 255, 227, 0.8)'],
        barThickness: 50,
        borderColor: ['red', 'green'],
        borderWidth: 0.5,
      }
    ]
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem){
            const value = tooltipItem.raw;
            return ` £${value}`
          }
        }
      }
    },
    scales: {
      y: {
        position: 'right'
      },
      x: {
        reverse: true
      }
    }
  };


  return (
    <section aria-labelledby="risk-reward" className="bar-chart chart">
      <h3 id="risk-reward" className="sr-only">Risk To Reward Chart</h3>
      <div id="bar">
        <Bar data={data} options={options}/>
      </div>
      <div className="ratio-container">
        <p className="count">{ratio}</p>
        <h2 className="chart-title">Risk to Reward Ratio</h2>
      </div>
    </section>
  );
};

export default HorizontalBarChart;
