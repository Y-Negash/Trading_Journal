import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

const NavBar: React.FC = () => {
    
    return (
        <nav>
            <h2 id="title">Trading Journal</h2>
            <div id="navbar-links">
                <Link className="navbar-link" to="/">Dashboard</Link>
                <Link className="navbar-link" to="/trades">Trades</Link>
                <Link className="navbar-link" to="/issues">Issues</Link>
                <Link className="navbar-link" to="/analytics">Analytics</Link>
            </div>
        </nav>
    );
}

export default NavBar;