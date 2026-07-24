import {Search} from "lucide-react";
import "./SearchBar.css";


export default function SearchBar() {
    return (
        <div className="searchBar">
            <Search size={18}/>
            <input
                type="text"
                placeholder="Search transactions..."
            />
        </div>
    );
}