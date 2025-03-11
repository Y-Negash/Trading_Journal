import options from "../../assets/currency-pair.json";
import { Option, SearchDropdownProps } from "../../interfaces";
import './searchDropdown.css';
import { useState } from "react";

const SearchDropdown: React.FC<SearchDropdownProps> = ({    
    name,
    setName
}) => {
    
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setName(null); //clear option when user types again
        setIsOpen(true);
    }
    // action of selecting an option from dropdown
    const selectOption = (option: Option) => {
        setName(option.name)
        setSearchQuery("")
        setIsOpen(!isOpen);
    }


    //filters options using search query 
    const filteredOptions = options.filter(
        option => option.name.toLowerCase().startsWith(searchQuery.toLowerCase()) 
        )
        
        
    const displayOptions = () => {
        return filteredOptions.map((option: Option) => (
            <div key={option.id} onClick={() => selectOption(option)}>
                {option.name}
            </div>
        ))
    }
 
    return (
        <div className="dropdown-container">
            <input
                type="text"
                placeholder="Start typing..."
                value={name ? name : searchQuery}
                onChange={handleChange}
                onClick={() => setIsOpen(!isOpen)}
                required
                className="dropdown-input"
            />
        <div className={`arrow ${isOpen ? "open" : ""}`}></div>
            {isOpen && (
                <div className="options">
                    {displayOptions()}
                </div>
            )}
        </div>
    );

}

export default SearchDropdown;