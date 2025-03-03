export interface Issue {
    issueId: number;
    issueName: string;
    issueDescription: string;
    tradeDate: string;
}

export interface Trade {
    tradeId?: number;
    name: string | null;
    tradeDate: string;
    entryPoint: number;
    exitPoint: number;
    stopLoss: number;
    takeProfit: number;
    issues?: Issue[]; 
}

export interface DashboardProps{
    trades: Trade[];
    issues: Issue[];
    addTrade: (trade: Omit<Trade, 'id'>) => Promise<void>;
}

export interface TradeFormProps{
    addTrade: (trade: Omit<Trade, 'id'>) => void;
}

export interface TradePageProps{
    trades: Trade[];
    filteredTrades: Trade[];
    setFilteredTrades: React.Dispatch<React.SetStateAction<Trade[]>>;
    isFiltered: boolean;
    setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>;
    deleteTrade: (id: number) => void;
}

export interface TradeWidgetProps{
    trades: Trade[];
}
export interface IssueWidgetProps{
    issues: Issue[];
}

export interface IssuePageProps{
    issues: Issue[];
    deleteIssue: (id: number) => void;
}

export interface AnalyticsProps{
    trades: Trade[];
}

export interface DoughnutProps{
    trades: Trade[];
  }

export interface Option{
    id: number,
    name: string
}

export interface SearchDropdownProps{
    name: string | null,
    setName: React.Dispatch<React.SetStateAction<string|null>>
}

export interface FilterProps{
    setFilteredTrades: React.Dispatch<React.SetStateAction<Trade[]>>,
    setIsFiltered: React.Dispatch<React.SetStateAction<boolean>>
    
}
