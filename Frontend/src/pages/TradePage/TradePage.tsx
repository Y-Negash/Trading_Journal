import React from "react";
import TradeList from "./TradeList";
import { Trade } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";
import './TradePage.css';

interface TradePageProps{
    trades: Trade[];
}

const TradePage: React.FC<TradePageProps> = ({ trades }) => {

    return(
        <div className="container">
            <NavBar />
            <TradeList trades={trades} />
        </div>
    )
}

export default TradePage;