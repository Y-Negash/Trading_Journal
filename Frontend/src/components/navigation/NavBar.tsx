import { Link } from "react-router-dom";
import './NavBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTrendUp } from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons/faHouse";
import { faChartColumn } from "@fortawesome/free-solid-svg-icons/faChartColumn";

const NavBar: React.FC = () => {
    
    return (
        <nav>
            <div id="navbar-links">
                <Link className="navbar-link" to="/">
                <FontAwesomeIcon icon={faHouse} />
                </Link>
                <Link className="navbar-link" to="/trades">
                    <FontAwesomeIcon icon={faMoneyBillTrendUp} />
                </Link>
                <Link className="navbar-link" to="/issues">
                    <FontAwesomeIcon icon={faBug} />
                </Link>
                <Link className="navbar-link" to="/analytics">
                <FontAwesomeIcon icon={faChartColumn} />
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;