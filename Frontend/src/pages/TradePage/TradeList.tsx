import React from "react";
import { Trade } from '../../interfaces';
import './TradeList.css'
interface TradeListProps{
    trades: Trade[];
}
const TradeList:React.FC<TradeListProps> = ({ trades }) => {

    const mappedTrades = trades.map((trade) => {
        return (
                <ul key={trade.id}  className="trade-list">
                    <h3>{trade.name}</h3>
                    <hr/>
                    <p>Entry Point: £{trade.entryPoint}</p>
                    <p>Exit Point: £{trade.exitPoint}</p>
                    <p>Stop Loss: £{trade.stopLoss}</p>
                    <p>Take Profit: £{trade.takeProfit}</p>
                    <p>{trade.tradeDate}</p>
                </ul>
        )
    })
    return(
        <div className="trade-container">
            {mappedTrades}
        </div>
    )
}

export default TradeList;