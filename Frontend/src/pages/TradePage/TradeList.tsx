import React from "react";
import { Trade } from '../../interfaces';

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