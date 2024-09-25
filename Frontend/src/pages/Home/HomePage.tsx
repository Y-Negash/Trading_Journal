import React from "react";
import TradeForm from "./TradeForm";
import './HomePage.css';
import { Trade } from '../../interfaces';

interface HomePageProps{
    addTrade: (trade: Omit<Trade, 'id'>) => Promise<void>;
}

const HomePage: React.FC<HomePageProps> = ({addTrade}) => {
    

    return(
        <div className="container">
            <h1 id="title">Trading Journal</h1>
            <TradeForm addTrade={addTrade} />
            
        </div>
    );
}

export default HomePage;