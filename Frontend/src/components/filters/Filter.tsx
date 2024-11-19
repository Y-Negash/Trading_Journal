import { useEffect, useState } from "react";
import { FilterProps } from "../../interfaces";
import './Filter.css';

const Filter: React.FC<FilterProps> = ({
    setFilteredTrades, setIsFiltered
}) => {

    const [status, setStatus] = useState<string>(""); 

    const handleSelect = () => {
        
        return (
            <select 
                name="filter status" 
                className="filter" 
                onChange={(e) => {setStatus(e.target.value)}}
            >
                <option value="" disabled>Select Filter</option>
                <option value="past-week">Past Week</option>
                <option value="past-month">Past Month</option>
                <option value="past-3-months">Past 3 Months</option>
                <option value="past-6-months">Past 6 Months</option>
                <option value="past-year">Past Year</option>
            </select>
        )
    }
    

    const LoadFilteredTrades = async () => {
        const response = await fetch(`http://localhost:8080/trades/filter?status=${status}`);
        const jsonData = await response.json();
        setFilteredTrades(jsonData);
        setIsFiltered(true);
    }
    
    useEffect(() => {
        if(status){
            LoadFilteredTrades();
        }
    }, [status])

    return(
        <div className="filter-container">
            {handleSelect()}
        </div>
    )
}

export default Filter;