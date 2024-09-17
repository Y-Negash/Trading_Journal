import React from "react";
import TradeList from "./TradeList";

interface Trade{
    name: string,
    tradeDate: Date,
    entryPoint: number,
    exitPoint: number,
    stopLoss: number,
    takeProfit: number,
}

interface TradePageProps{
    trades: Trade[]
}

const Trade: React.FC<TradePageProps> = ({ trades }) => {

    return(
        <>
            <h2>TRADES PAGE</h2>
            <TradeList trades={trades} />
        </>
    )
}

export default Trade;