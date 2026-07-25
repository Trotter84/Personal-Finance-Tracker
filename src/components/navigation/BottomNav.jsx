import {
    House,
    Target,
    Receipt,
    PieChart
} from "lucide-react";

import {NavLink} from "react-router-dom";

import Avatar from "../ui/Avatar";
import {useApp} from "../../context/AppContext";

import "./BottomNav.css";


export default function BottomNav() {

    const {profile} = useApp();

    return (
        <nav className="bottomNav">
            <div className="navItems">
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

                {/* Empty space for floating avatar */}
                <div className="navSpacer"></div>

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

            </div>

            <NavLink
                to="/profile"
                className={({isActive}) =>
                    `profileButton ${isActive ? "active" : ""}`
                }
            >
                <Avatar
                    src={profile.avatar}
                    initials={profile.initials}
                    size="medium"
                />
            </NavLink>

        </nav>

    );

}