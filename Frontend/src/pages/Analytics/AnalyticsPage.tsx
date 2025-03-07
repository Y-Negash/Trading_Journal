import NavBar from "../../components/navigation/NavBar";
import './AnalyticsPage.css';
import { AnalyticsProps } from "../../interfaces";
import DoughnutChart from "../../components/charts/DoughnutChart";
import { calculateWinRate, getRiskToRewardRatio  } from "../../utils/tradeUtils";
import PieChart from "../../components/charts/PieChart";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart";

const AnalyticsPage:React.FC<AnalyticsProps> = ({trades}) => {

  // Doughnut Chart
  const winRate = calculateWinRate(trades);
  const percentage = winRate + "%";

  //Total Trades Chart
  const totalTrade = trades.length;

  // Risk to Reward Chart
  let riskToRewardRatio = getRiskToRewardRatio(trades).ratio.toFixed(0);
   if(trades.length === 0){
    riskToRewardRatio = '0';
   }
  
  return (
    <div className="analytics-page page-container">
      <NavBar />
      <main>
        <header>
          <h3 id="analytics-title">Your Performance</h3>
        </header>
        <div className="chart-container">
        <section aria-labelledby="win-rate" className="doughnut chart">
          <h3 id="win-rate" className="sr-only">Win Rate Chart</h3>
          <p id="doughnut-value">{percentage}</p>
          <DoughnutChart trades={trades} />
          <h2 id="doughnut-title">Win Rate</h2>
        </section>
        <section aria-labelledby="buy-sell" className="pie chart">
          <h3 id="buy-sell" className="sr-only">Buy Sell Pie Chart</h3>
          <PieChart  trades={trades} />
          <h2 id="pie-title">Trade Type</h2>
        </section>
        <section aria-labelledby="total-trades" className="total-trades chart">
          <h3 id="total-trades" className="sr-only">Total Trades Count</h3>
          <div className="trade-count-container">
            <h2>{totalTrade}</h2>
            <h3>Total Trades</h3>
            <p>The number of trades you have currently </p>
          </div>
        </section>
        <section aria-labelledby="risk-reward" className="horizontal-bar chart">
          <h3 id="risk-reward" className="sr-only">Risk To Reward Chart</h3>
          <HorizontalBarChart trades={trades}/>
          <p>Risk to Reward Ratio: {riskToRewardRatio}</p>
        </section>
        <section aria-labelledby="profit-graph" className="profit-graph chart">
          <h3 id="profit-graph" className="sr-only">Profit by Date</h3>
          <p>Upcoming graph</p>
        </section>
        </div>
      </main>
    </div>
  );
}

export default AnalyticsPage;