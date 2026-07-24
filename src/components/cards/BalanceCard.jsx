import "./BalanceCard.css";
import {TrendingUp} from "lucide-react";


export default function BalanceCard() {
    
    return (
        <div className="balanceCard">
            <p className="balanceLabel">
                Total Balance
            </p>
            <h1 className="balanceAmount">
                $12,480.32
            </h1>
            <div className="balanceTrend">
                <TrendingUp size={14}/>
                2.4% this month
            </div>
        </div>
    );
}