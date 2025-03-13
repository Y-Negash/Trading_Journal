import TradeForm from "./TradeForm";
import './Dashboard.css';
import { DashboardProps } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";
import TradeWidget from "../../components/widgets/TradeWidget";
import IssueWidget from "../../components/widgets/IssueWidget";


const Dashboard: React.FC<DashboardProps> = ({addTrade, trades, issues}) => {

    return(
        <div className="dashboard">
            <NavBar />
            <main>
                <section aria-labelledby="recent-activities-header">
                    <h2 id="recent-activities-header" className="sr-only">Recent User Activities</h2>
                    <div className="widget-container">
                        <TradeWidget trades={trades}/>
                        <IssueWidget issues={issues}/>
                    </div>
                </section>
                <section aria-labelledby="dashboard-form-header" className="form">
                    <h2 id="dashboard-form-header" className="sr-only">Dashboard Controls</h2>
                        <TradeForm addTrade={addTrade} />
                </section>
            </main>
        </div>
    );
}

export default Dashboard;