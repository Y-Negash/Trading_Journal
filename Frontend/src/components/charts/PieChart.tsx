import { ArcElement, Chart as ChartJS, ChartOptions, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartProps } from "../../interfaces";
import { calculateBuySellMetric } from "../../utils/tradeUtils";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: React.FC<ChartProps> = ({trades}) => {

    const buySellMetric = calculateBuySellMetric(trades);
    const totalBuy = buySellMetric.buyCount;
    const totalSell = buySellMetric.sellCount;

    const data = {
        labels: ['Buy', 'Sell'],
        datasets: [
            {
                data: [totalBuy, totalSell],
                backgroundColor: ['lightblue', 'lightcyan'],
                cutout: '0%',
            }
        ]
    }

    const options:ChartOptions<'doughnut'> = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 10
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    const value = tooltipItem.raw; 
        
                    return ` ${value} trades`; 
                  }}
              }
        }
    }

    
    return (
        <section aria-labelledby="buy-sell" className="pie-chart chart">
          <h3 id="buy-sell" className="sr-only">Buy Sell Pie Chart</h3>
          <div id='pie'>
            <Doughnut data={data} options={options} />
          </div>
          <h2 className="chart-title">Trade Type</h2>
        </section>
    );

}

export default PieChart;