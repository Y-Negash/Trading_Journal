import { Trade } from "../interfaces";

 export const getTradeType = (trade: Trade) => {
    const { entryPoint, stopLoss, takeProfit } = trade; //destructure for simplicity

        // Check for SELL conditions
        if (takeProfit !== 0 && entryPoint > takeProfit) {
            return "SELL";
        }
        if (stopLoss !== 0 && entryPoint < stopLoss) {
            return "SELL";
        }

        // Check for BUY conditions
        if (takeProfit !== 0 && entryPoint < takeProfit) {
            return "BUY";
        }
        if (stopLoss !== 0 && entryPoint > stopLoss) {
            return "BUY";
        }
    }

const isWin = (trade: Trade) => {
    const tradeType = getTradeType(trade);
  
    if (tradeType === "BUY") {
      return trade.exitPoint >= trade.takeProfit;
    }
    
    if (tradeType === "SELL") {
      return trade.exitPoint <= trade.takeProfit;
    }
  
    return false;
  };

export const calculateWinRate = (trades: Trade[]) => {
    const totalTrade = trades.length;
    if(totalTrade == 0) return 0;

    const wins = trades.filter((trade)=>isWin(trade))
    const totalWins = wins.length;

    const winRate = (totalWins / totalTrade) * 100;
    console.log(winRate)
    return winRate;
}