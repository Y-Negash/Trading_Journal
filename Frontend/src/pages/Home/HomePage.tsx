import React from "react";
import TradeForm from "./TradeForm";
import './HomePage.css';
import { Trade } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";

interface HomePageProps{
    addTrade: (trade: Omit<Trade, 'id'>) => Promise<void>;
}

const HomePage: React.FC<HomePageProps> = ({addTrade}) => {
    

    return(
        <div className="container">
            <NavBar />
            <TradeForm addTrade={addTrade} />
            
        </div>
    );
}

export default HomePage;