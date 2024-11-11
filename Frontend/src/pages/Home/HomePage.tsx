import React from "react";
import TradeForm from "./TradeForm";
import './HomePage.css';
import { HomePageProps } from '../../interfaces';
import NavBar from "../../components/navigation/NavBar";
import TradeWidget from "../../components/widgets/TradeWidget";


const HomePage: React.FC<HomePageProps> = ({addTrade, trades}) => {

    return(
        <div className="container">
            <h2 id="title">Trading Journal</h2>
            <NavBar />
            <TradeWidget trades={trades}/>
            <TradeForm addTrade={addTrade} />
            
        </div>
    );
}

export default HomePage;