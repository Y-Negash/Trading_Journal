import React from "react";
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
    <div className="page-container">
      <NavBar />
      <section className="doughnut chart">
        <p>{percentage}</p>
        <DoughnutChart trades={trades} />
        <h2>Win Rate</h2>
      </section>
      <section className="pie chart">
        <PieChart  trades={trades} />
      </section>
      <section className="total-trades chart">
        <div>
          <h2>{totalTrade}</h2>
          <h3>Total Trades</h3>
          <p>The number of trades you have currently </p>
        </div>
      </section>
      <section className="horizontal-bar chart">
        <HorizontalBarChart trades={trades}/>
        <p>Risk to Reward Ratio: {riskToRewardRatio}</p>
      </section>
    </div>
  );
}

export default AnalyticsPage;