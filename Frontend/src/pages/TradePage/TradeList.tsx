import React from "react";
import { Trade } from '../../interfaces';

interface TradeListProps{
    trades: Trade[];
}
const TradeList:React.FC<TradeListProps> = ({ trades }) => {

    const mappedTrades = trades.map((trade) => {
        return (
            <li key={trade.id}>
                {trade.name}
                {trade.entryPoint}
                {trade.exitPoint}
                {trade.stopLoss}
                {trade.takeProfit}
                {trade.tradeDate}
            </li>
        )
    })
    return(
        <ul>
            {mappedTrades}
        </ul>
    )
}

export default TradeList;