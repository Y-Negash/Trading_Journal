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
    return winRate;
}

export const calculateBuySellMetric = (trades: Trade[]) => {

    let buyCount = 0;
    let sellCount = 0;

    trades.forEach((trade) => {
        const tradeType = getTradeType(trade);

        if (tradeType === "BUY") {
            buyCount++;
        } 
        else if (tradeType === "SELL") {
            sellCount++;
        }
        })
    
    return { buyCount, sellCount };
}


const calculateTotalRisk = (trades: Trade[]) => {
    let totalRisk = 0;
    trades.forEach((trade) => {

        const tradeType = getTradeType(trade);
        let risk = 0;

        if(tradeType === "BUY"){
            risk = trade.entryPoint - trade.stopLoss;
        }
        else if (tradeType === "SELL"){
            risk = trade.stopLoss - trade.entryPoint;
        }

        totalRisk = totalRisk + risk;
    })

    return totalRisk;
}

export const calculateTotalReward = (trades: Trade[]) => {
    let total = 0;
    const profitFromTrade:number[] = [];
    trades.forEach((trade) => {

        const tradeType = getTradeType(trade);
        let reward = 0;

        if(tradeType === "BUY"){
            reward = trade.takeProfit - trade.entryPoint;
        }
        else if (tradeType === "SELL"){
            reward = trade.entryPoint - trade.takeProfit;
        }

        profitFromTrade.push(reward);
        total = total + reward;
    })
    return {total, profitFromTrade};
}

export const getRiskToRewardRatio = (trades: Trade[]) => {
    const totalRisk = calculateTotalRisk(trades);
    const totalReward= calculateTotalReward(trades).total;
    const ratio = totalReward / totalRisk;

    return {totalRisk, totalReward, ratio};
} 