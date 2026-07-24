import {useState} from "react";

import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/layout/PageHeader.jsx";
import StatusBar from "../components/layout/StatusBar";

import SearchBar from "../components/ui/SearchBar";
import FilterChip from "../components/ui/FilterChip";

import TransactionRow from "../components/cards/TransactionRow";

import {useApp} from "../context/AppContext"

import "./Ledger.css";


export default function Ledger() {

    const {ledger} = useApp();

    const [filter, setFilter] = useState("All");

    const filters = [
        "All",
        "Income",
        "Expenses",
        "Food",
        "Transport"
    ];

    return (
        <PageLayout>
            <StatusBar/>
            <div className="screenBody">
                <PageHeader title="Ledger"/>
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
        </PageLayout>
    );
}