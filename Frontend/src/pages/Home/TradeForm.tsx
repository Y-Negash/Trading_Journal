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
    const[issueName, setIssueName] = useState("");
    const[issueDescription, setIssueDescription] = useState<string | undefined>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTrade({name, tradeDate, entryPoint, exitPoint, stopLoss, takeProfit});
        setName("");
        setTradeDate("");
        setEntryPoint(0);
        setExitPoint(0);
        setStopLoss(0);
        setTakeProfit(0);
        setIssueName("");
        setIssueDescription("");
    }

    return(
        <article className="form-container">
        <h2 id="form-title">Add A Trade </h2>
        <form onSubmit={handleSubmit} className="trade-form">
        <div className="trade-fields">
            <label>Name: * </label>
            <input 
                id="name" 
                type="text" 
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                required
                />
            <label>Date: *</label>
            <input 
                id="date" 
                type="date" 
                value={tradeDate}
                onChange={(e) => {setTradeDate(e.target.value)}}
                required
                />
            <label>Entry Point: *</label>
            <input 
                id="entry" 
                type="number" 
                value={entryPoint}
                onChange={(e) => {setEntryPoint(e.target.valueAsNumber)}}
                required
                />
            <label>Exit Point: *</label>
            <input 
                id="exit" 
                type="number" 
                value={exitPoint}
                onChange={(e) => {setExitPoint(e.target.valueAsNumber)}}
                required
                />
            <label>Stop Loss: *</label>
            <input 
                id="stop" 
                type="number" 
                value={stopLoss}
                onChange={(e) => {setStopLoss(e.target.valueAsNumber)}}
                required
                />
            <label>Take Profit: *</label>
            <input 
                id="take" 
                type="number" 
                value={takeProfit}
                onChange={(e) => {setTakeProfit(e.target.valueAsNumber)}}
                required
                />
        </div>
        <div className="issue-fields">
            <label>Issue Name: </label>
            <input 
                id="issue-name" 
                type="text" 
                value={issueName}
                onChange={(e) => {setIssueName(e.target.value)}}
                />
            <label>Issue Description: </label>
            <textarea
                id="issue-description"
                value={issueDescription}
                onChange={(e) => {setIssueDescription(e.target.value)}}
                placeholder=" Decribe the issue with your trade..."
            />
            <button type="submit">Submit</button>
        </div>
        </form>
        </article>
    )
}

export default TradeForm;