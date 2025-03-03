import React from "react";
import NavBar from "../../components/navigation/NavBar";
import './AnalyticsPage.css';
import { AnalyticsProps } from "../../interfaces";
import DoughnutChart from "../../components/charts/DoughnutChart";
import { calculateWinRate } from "../../utils/tradeUtils";

const AnalyticsPage:React.FC<AnalyticsProps> = ({trades}) => {

  const winRate = calculateWinRate(trades);
  const percentage = winRate + "%";
   
  return(
    <div className="container">
      <NavBar />
      <section className="doughnut chart">
        <p>{percentage}</p>
        <DoughnutChart trades={trades}/>
        <h2>Win Rate</h2>
      </section>
    </div>
   );
}

export default AnalyticsPage;