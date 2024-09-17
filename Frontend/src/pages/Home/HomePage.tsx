import React, { useState } from "react";
import TradeForm from "./TradeForm";
import './HomePage.css';

interface Trade{
    name: string,
    tradeDate: Date,
    entryPoint: number,
    exitPoint: number,
    stopLoss: number,
    takeProfit: number,
}

interface HomePageProps{
    addTrade: (trade: Trade) => void;
}
const HomePage: React.FC<HomePageProps> = ({ addTrade }) => {

    return(
        <>
        <div className="container">
            <h1 id="title">Trading Journal</h1>
            <TradeForm addTrade={addTrade} />
        </div>
        </>
    );
}

export default HomePage;