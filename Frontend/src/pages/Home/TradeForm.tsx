import React, { FormEvent, useState } from "react";
import './TradeForm.css';
import SearchDropdown from "../../components/search-dropdown/SearchDropdown";
import { TradeFormProps } from "../../interfaces";



const TradeForm: React.FC<TradeFormProps> = ({ 
    addTrade,
 }) => {

    const [name, setName] = useState<string | null>(null);
    const [tradeDate, setTradeDate] = useState("");
    const [entryPoint, setEntryPoint] = useState(0);
    const [exitPoint, setExitPoint] = useState(0);
    const [stopLoss, setStopLoss] = useState(0);
    const [takeProfit, setTakeProfit] = useState(0);
    const [issueName, setIssueName] = useState<string | undefined>("");
    const [issueDescription, setIssueDescription] = useState<string | undefined>("");
    const [errorMessage, setErrorMessage] = useState("");
    
    
    const validateForm = ():number => {

        if (!issueName && !issueDescription){ // no issue 
            return 0;
        }
        if (!issueName && issueDescription) {  // only issue description
            setErrorMessage("Please give your issue a name");
            return 1;
        }
            setErrorMessage("");

        if(issueName && issueName.length > 30){ // long issue name
            setErrorMessage("Please shorten the issue name, you've reached the limit");
            return 1;
        }
            setErrorMessage("");  
            return 2;
    }
    
    const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const validity = validateForm();

        let newTrade = {
            name,
            tradeDate,
            entryPoint,
            exitPoint,
            stopLoss,
            takeProfit,
            issueName,
            issueDescription
        }
        
        if(validity == 1){
            return;
        }
        
        if(validity == 0){
           
            newTrade = {
                ...newTrade,
                issueName: undefined,
                issueDescription: undefined
            }
            console.log(newTrade)
            addTrade(newTrade);
        }
        if(validity == 2){
            console.log(newTrade)
            addTrade(newTrade);
        }

        setName(null);
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
            <div className="label-input-pair name">
                <label>Name</label>
                <SearchDropdown 
                    name={name} 
                    setName={setName} 
                />
            </div>
            <div className="label-input-pair">
                <label>Date </label>
                <input 
                    id="date" 
                    type="date" 
                    value={tradeDate}
                    onChange={(e) => {setTradeDate(e.target.value)}}
                    required
                    />
                </div>
            <div className="label-input-pair">
                <label>Entry Point </label>
                <input 
                    id="entry" 
                    type="number" 
                    value={entryPoint}
                    onChange={(e) => {setEntryPoint(e.target.valueAsNumber)}}
                    required
                    />  
            </div>
            <div className="label-input-pair">
                <label>Exit Point </label>
                <input 
                    id="exit" 
                    type="number" 
                    value={exitPoint}
                    onChange={(e) => {setExitPoint(e.target.valueAsNumber)}}
                    required
                    />
                </div>
            <div className="label-input-pair">
                <label>Stop Loss </label>
                <input 
                    id="stop" 
                    type="number" 
                    value={stopLoss}
                    onChange={(e) => {setStopLoss(e.target.valueAsNumber)}}
                    required
                    />  
            </div>
            <div className="label-input-pair">
                <label>Take Profit </label>
                <input 
                    id="take" 
                    type="number" 
                    value={takeProfit}
                    onChange={(e) => {setTakeProfit(e.target.valueAsNumber)}}
                    required
                    />
                </div>   
            <div className="calculator-links">
                <a href="https://www.forextime.com/uk/trading-tools/trading-calculator/pip-calculator" target="_blank">Pip Calculator</a>
                <a href="https://www.myfxbook.com/forex-calculators/position-size" target="_blank">Position Size Calculator</a>
            </div>
        </div>
        <div className="issue-fields">
            <label id="issue-label">Issue Name<span id="note">Note - Adding an issue is optional</span> </label>
            <input 
                id="issue-name" 
                type="text" 
                value={issueName}
                onChange={(e) => {setIssueName(e.target.value)}}
                />
            {errorMessage && <p className="error">{errorMessage}</p>}
            <label>Issue Description <em>(optional)</em> </label>
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