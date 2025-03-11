import NavBar from "../../components/navigation/NavBar";
import { AnalyticsProps } from "../../interfaces";
import DoughnutChart from "../../components/charts/DoughnutChart";
import PieChart from "../../components/charts/PieChart";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart";
import LineChart from "../../components/charts/LineChart";
import './AnalyticsPage.css';
import "../../components/charts/Chart.css";

const AnalyticsPage:React.FC<AnalyticsProps> = ({trades}) => {


  //Total Trades Chart
  const totalTrade = trades.length;
  
  return (
    <div className="analytics-page page-container">
      <NavBar />
      <header>
        <h3 className="title">Your Performance</h3>
      </header>
      <main>
        <div className="chart-container">
          <DoughnutChart trades={trades} />
          <PieChart trades={trades} />
          <section aria-labelledby="total-trades-header" className="total-trades chart">
            <h3 id="total-trades-header" className="sr-only">Total Trades Count</h3>
            <div className="trades-count">
              <p className="count">{totalTrade}</p>
              <h2 className="chart-title">Total Trades</h2>
              <p>The number of trades recorded in your portfolio.</p>
            </div>
          </section>
          <HorizontalBarChart trades={trades} />
          <LineChart trades={trades} />
        </div>
      </main>
    </div>
  );
}

export default AnalyticsPage;