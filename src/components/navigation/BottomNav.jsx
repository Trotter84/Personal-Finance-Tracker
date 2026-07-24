import {House, Target, Receipt, PieChart, Plus} from "lucide-react";
import {NavLink} from "react-router-dom";
import "./BottomNav.css";


export default function BottomNav() {

    return (
        <div className="bottomNav">
            <NavLink
                to="/dashboard"
                className={({isActive}) => isActive ? "active" : ""}
            >
                <House/>
                Home
            </NavLink>
            <NavLink
                to="/goals"
                className={({isActive}) => isActive ? "active" : ""}
            >
                <Target/>
                Goals
            </NavLink>
            <button className="fab">
                <Plus/>
            </button>
            <NavLink
                to="/transactions"
                className={({isActive}) => isActive ? "active" : ""}
            >
                <Receipt/>
                Ledger
            </NavLink>
            <NavLink
                to="/reports"
                className={({isActive}) => isActive ? "active" : ""}
            >
                <PieChart/>
                Reports
            </NavLink>
        </div>
    );
}