import React, { FormEvent, useState } from "react";
import './TradeForm.css';
import { Trade } from '../../interfaces';

interface TradeFormProps{
    addTrade: (trade: Omit<Trade, 'id'>) => void,
}

const TradeForm: React.FC<TradeFormProps> = ({ addTrade }) => {

    const[name, setName] = useState("");
    const[tradeDate, setTradeDate] = useState("");
    const[entryPoint, setEntryPoint] = useState(0);
    const[exitPoint, setExitPoint] = useState(0);
    const[stopLoss, setStopLoss] = useState(0);
    const[takeProfit, setTakeProfit] = useState(0);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTrade({name, tradeDate, entryPoint, exitPoint, stopLoss, takeProfit});
        setName("");
        setTradeDate("");
        setEntryPoint(0);
        setExitPoint(0);
        setStopLoss(0);
        setTakeProfit(0);
    }

    return(
        <article className="form-container">
        <h2 id="form-title">Add A Trade </h2>
        <form onSubmit={handleSubmit} className="trade-form">
            <label>Name: </label>
            <input 
                id="name" 
                type="text" 
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                />
            <label>Date: </label>
            <input 
                id="date" 
                type="date" 
                value={tradeDate}
                onChange={(e) => {setTradeDate(e.target.value)}}
                />
            <label>Entry Point: </label>
            <input 
                id="entry" 
                type="number" 
                value={entryPoint}
                onChange={(e) => {setEntryPoint(e.target.valueAsNumber)}}
                />
            <label>Exit Point: </label>
            <input 
                id="exit" 
                type="number" 
                value={exitPoint}
                onChange={(e) => {setExitPoint(e.target.valueAsNumber)}}
                />
            <label>Stop Loss: </label>
            <input 
                id="stop" 
                type="number" 
                value={stopLoss}
                onChange={(e) => {setStopLoss(e.target.valueAsNumber)}}
                />
            <label>Take Profit: </label>
            <input 
                id="take" 
                type="number" 
                value={takeProfit}
                onChange={(e) => {setTakeProfit(e.target.valueAsNumber)}}
                />
            <button type="submit">Submit</button>
        </form>
        </article>
    )
}

export default TradeForm;