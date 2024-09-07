import React from "react";

const TradeForm: React.FC = () => {


    return(
        <>
        <h2>Add a trade: </h2>
        <form>
            <label>Name: </label>
            <input type="text" id="name" name="name" />
            <label>Date: </label>
            <input type="date" id="date" name="date"/>
            <label>Entry Point: </label>
            <input type="number" id="entry" name="entry"/>
            <label>Exit Point: </label>
            <input type="number" id="exit" name="exit"/>
            <label>Stop Loss: </label>
            <input type="number" id="stop" name="stop"/>
            <label>Take Profit: </label>
            <input type="number" id="profit" name="profit"/>
        </form>
        </>
    )
}

export default TradeForm;