import React from "react";
import { Trade } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";
import './TradePage.css';

interface TradePageProps{
    trades: Trade[];
}

const TradePage: React.FC<TradePageProps> = ({ trades }) => {
    
    const getTradeType = (trade: Trade) => {
        if(trade.entryPoint > trade.takeProfit || trade.entryPoint < trade.stopLoss){
            return <button className="sell">SELL</button>;
        } else {
            return <button className="buy">BUY</button>;
        }
    }

    const mappedTrades = trades.map((trade) => {

       const tradeType= getTradeType(trade);

        return (
                <ul key={trade.id}  className="trade-list">
                    <h3>{trade.name}</h3>
                    <p>{tradeType}</p>
    <div className="details">
        <div className="detail-item">
            <p>Entry Point:</p>
            <span>£{trade.entryPoint}</span>
        </div>
        <div className="detail-item">
            <p>Exit Point:</p>
            <span>£{trade.exitPoint}</span>
        </div>
        <div className="detail-item">
            <p>Stop Loss:</p>
            <span>£{trade.stopLoss}</span>
        </div>
        <div className="detail-item">
            <p>Take Profit:</p>
            <span>£{trade.takeProfit}</span>
        </div>
        <hr/>
        <div className="detail-item">
            <p>Date:</p>
            <span>{trade.tradeDate}</span>
        </div>
        <hr/>
    </div>
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