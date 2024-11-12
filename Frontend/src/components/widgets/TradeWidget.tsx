import { useEffect, useState } from "react";
import { Trade, TradePageProps } from "../../interfaces";
import '../../pages/Home/HomePage.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";

const TradeWidget:React.FC<TradePageProps>= ({trades}) => {
    
    const [latestTrades, setLatestTrades]=useState<Trade[]>([]);
    
    useEffect(()=>{
        setLatestTrades(trades.slice(-3));
    },[trades]) //re-renders each time new trade is added
    
    const mappedLatestTrades = latestTrades.map((recentTrade)=>{
        return (
        <a href="/trades">
            <li key={recentTrade.id} className="recent-trade">
                <span className="icon"><FontAwesomeIcon icon={faMoneyBillTrendUp} /></span>
                <span className="trade-name">{recentTrade.name}</span>
            </li>
        </a> 
        )
    })

    return(
        <div className="recent-trades">
            <h3 className="widget-title">Recent Trades</h3>
            <hr/>
            <div className="recent-trade-list">

            {mappedLatestTrades}
            </div>
        </div>
    )
}

export default TradeWidget;