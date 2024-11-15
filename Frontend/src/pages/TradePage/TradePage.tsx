import React from "react";
import { Trade, TradePageProps } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";
import './TradePage.css';

const TradePage: React.FC<TradePageProps> = ({ trades }) => {
    
    const getTradeType = (trade: Trade) => {
    const { entryPoint, stopLoss, takeProfit } = trade; //destructure for simplicity

        // Check for SELL conditions
        if (takeProfit !== 0 && entryPoint > takeProfit) {
            return <button className="sell">SELL</button>;
        }
        if (stopLoss !== 0 && entryPoint > stopLoss) {
            return <button className="sell">SELL</button>;
        }

        // Check for BUY conditions
        if (takeProfit !== 0 && entryPoint < takeProfit) {
            return <button className="buy">BUY</button>;
        }
        if (stopLoss !== 0 && entryPoint < stopLoss) {
            return <button className="buy">BUY</button>;
        }

        // If none of the conditions are met, indicate EMPTY
        return <p>EMPTY</p>;
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
            <h3 id="tradepage-title">Trade Page</h3>
            <div className="trade-container">
                {mappedTrades}
            </div>
        </div>
    )
}

export default TradePage;