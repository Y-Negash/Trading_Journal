import React from "react";
import TradeForm from "./TradeForm";
import './HomePage.css';

const HomePage: React.FC = () => {
   
    return(
        <>
        <div className="container">
            <h1 id="title">Trading Journal</h1>
            <TradeForm />
        </div>
        </>
    );
}

export default HomePage;