import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/layout/PageHeader";
import StatusBar from "../components/layout/StatusBar";

import DonutChart from "../components/charts/DonutChart";
import LegendRow from "../components/charts/LegendRow";
import TrendChart from "../components/charts/TrendChart";

import {useApp} from "../context/AppContext"

import "./Reports.css";


export default function Reports() {

    const {reports} = useApp();

    return (
        <PageLayout>
            <StatusBar/>
            <div className="screenBody">
                <PageHeader title="Reports"/>
                <DonutChart/>
                <div className="reportLegend">
                    {
                        reports.spendingByCategory.map(item => (
                            <LegendRow
                                key={item.id}
                                label={item.category}
                                amount={item.amount}
                                color={item.color}
                            />
                        ))
                    }
                </div>
                <h3 className="chartTitle">
                    Monthly Spending
                </h3>
                <TrendChart/>
            </div>
        </PageLayout>
    );
}