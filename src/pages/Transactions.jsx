import {useState} from "react";

import DeviceFrame from "../components/layout/DeviceFrame";
import StatusBar from "../components/layout/StatusBar";
import BottomNav from "../components/navigation/BottomNav";

import SearchBar from "../components/ui/SearchBar";
import FilterChip from "../components/ui/FilterChip";

import TransactionRow from "../components/cards/TransactionRow";

import {ledger} from "../data/ledger";

import "./Transactions.css";


export default function Transactions() {

    const [filter, setFilter] = useState("All");

    const filters = [
        "All",
        "Income",
        "Expenses",
        "Food",
        "Transport"
    ];

    return (
        <DeviceFrame>
            <StatusBar/>
            <div className="screenBody">
                <div className="pageHeader">
                    <h2>
                        Ledger
                    </h2>
                </div>
                <SearchBar/>
                <div className="chipRow">
                    {
                        filters.map(item => (
                            <FilterChip
                                key={item}
                                active={item === filter}
                                onClick={() => setFilter(item)}
                            >
                                {item}
                            </FilterChip>
                        ))
                    }
                </div>
                {
                    ledger.map(section => (
                        <div key={section.id}>
                            <h5 className="dateHeading">
                                {section.date}
                            </h5>
                            {
                                section.transactions
                                    .filter(transaction => {
                                        if (filter === "All") return true;
                                        if (filter === "Expenses")
                                            return transaction.amount < 0;
                                        return transaction.category === filter;
                                    })
                                    .map(transaction => (
                                        <TransactionRow
                                            key={transaction.id}
                                            {...transaction}
                                        />
                                    ))
                            }
                        </div>
                    ))
                }
            </div>
            <BottomNav/>
        </DeviceFrame>
    );
}