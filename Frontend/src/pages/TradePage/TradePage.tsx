import React from "react";
import TradeList from "./TradeList";
import { Trade } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";

interface TradePageProps{
    trades: Trade[];
}

const TradePage: React.FC<TradePageProps> = ({ trades }) => {

    return(
        <>
            <h2>TRADES PAGE</h2>
            <NavBar />
            <TradeList trades={trades} />
        </>
    )
}

export default TradePage;