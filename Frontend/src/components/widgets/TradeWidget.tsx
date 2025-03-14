import { useEffect, useState } from "react";
import { Trade, TradeWidgetProps } from "../../interfaces";
import './widgets.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";

const TradeWidget:React.FC<TradeWidgetProps>= ({trades}) => {
    
    const [latestTrades, setLatestTrades]=useState<Trade[]>([]);
    
    useEffect(()=>{
        setLatestTrades(trades.slice(-3));
    },[trades]) //re-renders each time new trade is added
    
    const mappedLatestTrades = latestTrades.map((recentTrade)=>{
        return (
        <a href="/trades">
            <li key={recentTrade.tradeId} className="recent-trade">
                <span className="icon"><FontAwesomeIcon icon={faMoneyBillTrendUp} /></span>
                <p className="trade-name">{recentTrade.name}</p>
            </li>
        </a> 
        )
    })

    return(
        <div className="recent-trades">
            <h3 className="widget-title">Recent Trades</h3>
            {mappedLatestTrades.length > 0 ?
            <div className="recent-trade-list">{mappedLatestTrades}</div> : <p className="unavailable-display">---  No trades have been added  ---</p>}  
        </div>
    )
}

export default TradeWidget;