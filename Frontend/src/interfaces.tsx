export interface Issue {
    issueId: number;
    issueName: string;
    issueDescription: string;
    tradeDate: string;
}

export interface Trade {
    id?: number;
    name: string;
    tradeDate: string;
    entryPoint: number;
    exitPoint: number;
    stopLoss: number;
    takeProfit: number;
    issues?: Issue[]; 
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