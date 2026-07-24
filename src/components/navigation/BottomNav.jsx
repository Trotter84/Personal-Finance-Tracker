import {
    House,
    Target,
    Receipt,
    PieChart
} from "lucide-react";

import {NavLink} from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
    return (
        <nav className="bottomNav">

            <NavLink
                to="/dashboard"
                className={({isActive}) => isActive ? "active" : ""}
            >
                <House size={20}/>
                <span>Home</span>
            </NavLink>

            <NavLink
                to="/goals"
                className={({isActive}) => isActive ? "active" : ""}
            >
                <Target size={20}/>
                <span>Goals</span>
            </NavLink>

            <NavLink
                to="/profile"
                className="profileButton"
            >
                <img
                    src="/images/profile.jpg"
                    // src={user.photoURL || defaultAvatar}
                    // alt={user.name}
                />
            </NavLink>

            <NavLink
                to="/ledger"
                className={({isActive}) => isActive ? "active" : ""}
            >
                <Receipt size={20}/>
                <span>Ledger</span>
            </NavLink>

            <NavLink
                to="/reports"
                className={({isActive}) => isActive ? "active" : ""}
            >
                <PieChart size={20}/>
                <span>Reports</span>
            </NavLink>

        </nav>
    );
}