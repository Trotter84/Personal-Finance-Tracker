import DeviceFrame from "../components/layout/DeviceFrame";
import StatusBar from "../components/layout/StatusBar";
import BottomNav from "../components/navigation/BottomNav";

import BalanceCard from "../components/cards/BalanceCard";
import StatCard from "../components/cards/StatCard";
import TransactionRow from "../components/cards/TransactionRow";

import {ArrowDownLeft, ArrowUpRight} from "lucide-react";

import {recentTransactions} from "../data/transactions";

import "./Dashboard.css";


export default function Dashboard() {

    return (
        <DeviceFrame>
            <StatusBar/>
            <div className="screenBody">
                <div className="dashboardHeader">
                    <div>
                        <p className="welcome">
                            Welcome Back
                        </p>
                        <h2>
                            Alex
                        </h2>
                    </div>
                    <div className="avatar">
                        A
                    </div>
                </div>
                <BalanceCard/>
                <div className="stats">
                    <StatCard
                        title="Income"
                        amount="$4,200"
                        color="#8FAE87"
                        icon={<ArrowDownLeft size={16}/>}
                    />
                    <StatCard
                        title="Expenses"
                        amount="$1,860"
                        color="#BC6753"
                        icon={<ArrowUpRight size={16}/>}
                    />
                </div>
                <div className="recentHeader">
                    <h3>
                        Recent Entries
                    </h3>
                    <button>
                        View All
                    </button>
                </div>
                {
                    recentTransactions.map(transaction => (
                        <TransactionRow
                            key={transaction.id}
                            {...transaction}
                        />
                    ))
                }
            </div>
            <BottomNav/>
        </DeviceFrame>
    );
}