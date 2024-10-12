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
        <>
            <h2 id="tradepage-title">TRADES PAGE</h2>
            <NavBar />
            <TradeList trades={trades} />
        </>
    )
}

export default TradePage;