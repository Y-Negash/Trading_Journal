import React from "react";
import TradeList from "./TradeList";
import { Trade } from '../../interfaces';

interface TradePageProps{
    trades: Trade[];
}

const TradePage: React.FC<TradePageProps> = ({ trades }) => {

    return(
        <>
            <h2>TRADES PAGE</h2>
            <TradeList trades={trades} />
        </>
    )
}

export default TradePage;