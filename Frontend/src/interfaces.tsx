export interface Trade{
    id?: number,
    name: string,
    tradeDate: Date,
    entryPoint: number,
    exitPoint: number,
    stopLoss: number,
    takeProfit: number,
}
