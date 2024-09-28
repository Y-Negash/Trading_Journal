export interface Trade{
    id?: number,
    name: string,
    tradeDate: string,
    entryPoint: number,
    exitPoint: number,
    stopLoss: number,
    takeProfit: number,
    issueName?: string,
    issueDescription?: string,
}
