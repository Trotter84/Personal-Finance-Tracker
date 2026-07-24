import {createContext, useContext, useState} from "react";

import {profile as initialProfile} from "../data/profile";
import {goals as initialGoals} from "../data/goals";
import {ledger as initialLedger} from "../data/ledger";
import {recentTransactions} from "../data/transactions";
import {
    spendingByCategory,
    monthlyTrend
} from "../data/reports";

const AppContext = createContext();


export function AppProvider({children}) {

    const [profile] = useState(initialProfile);

    const [goals] = useState(initialGoals);

    const [ledger] = useState(initialLedger);

    const [transactions] = useState(recentTransactions);

    const [reports] = useState({
        spendingByCategory,
        monthlyTrend
    });

    return (
        <AppContext.Provider
            value={{
                profile,
                goals,
                ledger,
                transactions,
                reports
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
    return useContext(AppContext);
}