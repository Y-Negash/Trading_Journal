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

export interface HomePageProps{
    trades: Trade[],
    addTrade: (trade: Omit<Trade, 'id'>) => Promise<void>;
}

export interface TradeFormProps{
    addTrade: (trade: Omit<Trade, 'id'>) => void,
}

export interface Option {
    id: number,
    name: string
}

export interface SearchDropdownProps{
    name: string | null,
    setName: React.Dispatch<React.SetStateAction<string|null>>
}

export interface TradeWidgetProps{
    trades: Trade[]
}
