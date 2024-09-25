import React, { useEffect } from "react";
import TradeForm from "./TradeForm";
import './HomePage.css';
import { Trade } from '../../interfaces';

interface HomePageProps{
    trades: Trade[],
    setTrades: React.Dispatch<React.SetStateAction<Trade[]>>
}

const HomePage: React.FC<HomePageProps> = ({trades, setTrades}) => {
    
    const loadTrades = async () => {
        const response = await fetch('http://localhost:8080/trades');
        const jsonData = await response.json();
        setTrades(jsonData);
    }

    useEffect(() => {
        loadTrades()
    },[])

    const addTrade = async (trade: Omit<Trade, 'id'>) => {
    const response = await fetch('http://localhost:8080/trades',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            },
        body: JSON.stringify(trade),
        });
    const newTrade = await response.json();
    setTrades([...trades, newTrade])
    }
    
    return(
        <div className="container">
            <h1 id="title">Trading Journal</h1>
            <TradeForm addTrade={addTrade} />
            
        </div>
    );
}

export default HomePage;