import React from "react";

interface Trade{
    name: string,
    tradeDate: Date,
    entryPoint: number,
    exitPoint: number,
    stopLoss: number,
    takeProfit: number,
}

interface TradeListProps{
    trades: Trade[];
}
const TradeList:React.FC<TradeListProps> = ({ trades }) => {

    const mappedTrades = trades.map((trade) => {
        return (
            <li key={trade.name}>
                {trade.name}
                {trade.entryPoint}
            </li>
        )
    })
    return(
        <>
            {mappedTrades}
        </>
    )
}

export default TradeList;