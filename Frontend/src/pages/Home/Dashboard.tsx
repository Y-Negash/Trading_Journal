import React from "react";
import TradeForm from "./TradeForm";
import './Dashboard.css';
import { DashboardProps } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";
import TradeWidget from "../../components/widgets/TradeWidget";
import IssueWidget from "../../components/widgets/IssueWidget";


const Dashboard: React.FC<DashboardProps> = ({addTrade, trades, issues}) => {

    return(
        <div className="container">
            <NavBar />
            <section className="widgets-container">
                <TradeWidget trades={trades}/>
                <IssueWidget issues={issues}/>
            </section>
            <TradeForm addTrade={addTrade} />
            
        </div>
    );
}

export default Dashboard;