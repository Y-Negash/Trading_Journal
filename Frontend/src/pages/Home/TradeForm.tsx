import React, { ChangeEvent, FormEvent, useState } from "react";
import './TradeForm.css';
import { Trade } from '../../interfaces';

interface TradeFormProps{
    addTrade: (trade: Omit<Trade, 'id'>) => void,
}

const TradeForm: React.FC<TradeFormProps> = ({ addTrade }) => {

    const[name, setName] = useState("");
    const[tradeDate, setTradeDate] = useState(new Date(0));
    const[entryPoint, setEntryPoint] = useState(0);
    const[exitPoint, setExitPoint] = useState(0);
    const[stopLoss, setStopLoss] = useState(0);
    const[takeProfit, setTakeProfit] = useState(0);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTrade({name, tradeDate, entryPoint, exitPoint, stopLoss, takeProfit});
        setName("");
        setTradeDate(new Date(0));
        setEntryPoint(0);
        setExitPoint(0);
        setStopLoss(0);
        setTakeProfit(0);
    }

    const dateString = tradeDate.toISOString().split('T')[0];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTradeDate(new Date(e.target.value));
    }

    return(
        <>
        <h2>Add a trade: </h2>
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
                value={dateString}
                onChange={handleChange}
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
        </>
    )
}

export default TradeForm;