import PageLayout from "../components/layout/PageLayout";

import BalanceCard from "../components/cards/BalanceCard";
import StatCard from "../components/cards/StatCard";
import TransactionRow from "../components/cards/TransactionRow";

import {ArrowDownLeft, ArrowUpRight} from "lucide-react";

import {profile} from "../data/profile";
import {recentTransactions} from "../data/transactions";

import "./Dashboard.css";


export default function Dashboard() {
    return (
        <PageLayout>
            <div className="dashboardHeader">
                <div>
                    <p className="welcome">Welcome Back</p>
                    <h2>{profile.name}</h2>
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
                <h3>Recent Entries</h3>

                <button>
                    View All
                </button>
            </div>
            {recentTransactions.map(transaction => (
                <TransactionRow
                    key={transaction.id}
                    {...transaction}
                />
            ))}
        </PageLayout>
    );
}