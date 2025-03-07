import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
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

    const options = {
        responsive: true,
        layout: {
            padding: {
                left: 10,
                right: 10
            }
        }
    }

    
    return (
        <div className="pie-chart">
            <Doughnut data={data} key="buy-sell-chart" options={options}/>
        </div>
    );

}

export default PieChart;