import React from "react";
import { Trade, TradePageProps } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";
import './TradePage.css';
import Filter from '../../components/filters/Filter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { getTradeType } from "../../utils/tradeUtils";

const TradePage: React.FC<TradePageProps> = ({ 
    trades, filteredTrades, setFilteredTrades, isFiltered, setIsFiltered, deleteTrade
}) => {

    const newTradeName = (trade: Trade) => {
        const { name, tradeDate, entryPoint, exitPoint, stopLoss, takeProfit, issues } = trade;
        const reversedDate = tradeDate.split("-").reverse().join("-");
        const tradeName = name!.concat(" ", reversedDate); // more unique name

        const readableTrade = {
            name: tradeName,
            tradeDate: reversedDate,
            entryPoint,
            exitPoint,
            stopLoss,
            takeProfit,
            issues
        }

         return readableTrade;
    }
 
   
    const mappedTrades = (tradesToMap: Trade[]) =>  tradesToMap.map((trade) => {
        
        const tradeType = () => {
            const type = getTradeType(trade);
            if(type === "BUY"){
                return <button className="buy">BUY</button>;
            } 
            else if(type === "SELL"){
                return <button className="sell">SELL</button>;
            } else {
                return <p>EMPTY</p>
            }
        };

        const readableTrade = newTradeName(trade);
        const handleDelete = async(tradeId: number | undefined) => {
            if(tradeId){
                await deleteTrade(tradeId!); 
            }
        }
       
        return (
                <ul key={trade.tradeId}  className="trade-list">
                    <h3>{readableTrade.name}</h3>
                    <div>{tradeType()}</div>
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
                        <div className="delete-icon" onClick={() => handleDelete(trade.tradeId)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </div>
                    </div>
                </ul>
        )
    })



    return(
        <div className="container">
            <NavBar />
            <h3 id="tradepage-title">Trade Page</h3>
            <Filter 
                setFilteredTrades={setFilteredTrades}
                setIsFiltered={setIsFiltered}
            /> 
            <div className="trade-container">
                {isFiltered ? mappedTrades(filteredTrades) : mappedTrades(trades) }
            </div>
        </div>
    )
}

export default TradePage;