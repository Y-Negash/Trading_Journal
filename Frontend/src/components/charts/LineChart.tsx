import { Chart as ChartJS, LineElement, Tooltip, Legend, LinearScale, CategoryScale, PointElement, ChartOptions } from "chart.js";
import { ChartProps } from "../../interfaces";
import { calculateTotalReward } from "../../utils/tradeUtils";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, Legend, Tooltip, LinearScale, CategoryScale);

const LineChart: React.FC<ChartProps> = ({ trades }) => {

  const sortedTrades = trades.sort((a, b) =>
    new Date(a.tradeDate).getTime() - new Date(b.tradeDate).getTime()
  );

  // Extract the sorted dates
  const date = sortedTrades.map((trade) => trade.tradeDate);
  const profit = calculateTotalReward(trades).profitFromTrade;

  const data = {
    labels: date,
    datasets: [
      {
        label: 'Profit',
        data: profit,
        borderColor: '#0D2F62',
        backgroundColor: '#6d89b7',
        borderWidth: 1.5
      }
    ]
  };

  const options:ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            ticks: {
                callback: function(value) {
                    return '£' + value;
                }
            }
        }
    }
  }

  return (
    <section aria-labelledby="profit-graph" className="line-chart chart">
      <h3 id="profit-graph" className="sr-only">Profit by Date</h3>
      <div className="history-text">
        <h2 className="chart-title">Trade History</h2>
        <p>This visualizes your trade history and profit over time, providing insights into your performance and trends.</p>
      </div>
      <div id="line">
        <Line data={data} options={options}/>
      </div>
    </section>
  );
};

export default LineChart;
