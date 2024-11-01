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
            return "SELL";
        } else {
            return "BUY";
        }
    }

    const mappedTrades = trades.map((trade) => {

       const tradeType= getTradeType(trade);

        return (
                <ul key={trade.id}  className="trade-list">
                    <h3>{trade.name}</h3>
                    <hr/>
                    <p>Entry Point: £{trade.entryPoint}</p>
                    <p>Exit Point: £{trade.exitPoint}</p>
                    <p>Stop Loss: £{trade.stopLoss}</p>
                    <p>Take Profit: £{trade.takeProfit}</p>
                    <p>{trade.tradeDate}</p>
                    <button>{tradeType}</button>
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