import { useEffect, useState } from "react";
import { Trade, TradeWidgetProps } from "../../interfaces";

const TradeWidget:React.FC<TradeWidgetProps>= ({trades}) => {
    
    const [latestTrades, setLatestTrades]=useState<Trade[]>([]);
    
    useEffect(()=>{
        setLatestTrades(trades.slice(-3));
    },[trades]) //re-renders each time new trade is added
    
    const mappedLatestTrades = latestTrades.map((recentTrade)=>{
        return (
            <ul key={recentTrade.id}>
                {recentTrade.name}
            </ul>
        )
    })

    return(
        <>
            {mappedLatestTrades}
        </>
    )
}

export default TradeWidget;