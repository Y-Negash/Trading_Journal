import React from "react";
import TradeForm from "./TradeForm";
import './HomePage.css';
import { HomePageProps } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";
import TradeWidget from "../../components/widgets/TradeWidget";
import IssueWidget from "../../components/widgets/IssueWidget";


const HomePage: React.FC<HomePageProps> = ({addTrade, trades, issues}) => {

    return(
        <div className="container">
            <NavBar />
            <TradeWidget trades={trades}/>
            <IssueWidget issues={issues} />
            <TradeForm addTrade={addTrade} />
            
        </div>
    );
}

export default HomePage;