import React from "react";
import { Trade } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";
import './TradePage.css';

interface TradePageProps{
    trades: Trade[];
}

const TradePage: React.FC<TradePageProps> = ({ trades }) => {

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
        <div className="container">
            <NavBar />
            <div className="trade-container">
            {mappedTrades}
            </div>
        </div>
    )
}

export default TradePage;