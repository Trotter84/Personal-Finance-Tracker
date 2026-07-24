import DeviceFrame from "../components/layout/DeviceFrame";
import StatusBar from "../components/layout/StatusBar";
import BottomNav from "../components/navigation/BottomNav";

import DonutChart from "../components/charts/DonutChart";
import LegendRow from "../components/charts/LegendRow";
import TrendChart from "../components/charts/TrendChart";

import {spendingByCategory} from "../data/reports";

import "./Reports.css";


export default function Reports() {

    return (
        <DeviceFrame>
            <StatusBar/>
            <div className="screenBody">
                <div className="pageHeader">
                    <h2>Reports</h2>
                </div>
                <DonutChart/>
                <div className="reportLegend">
                    {
                        spendingByCategory.map(item => (
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
            <BottomNav/>
        </DeviceFrame>
    );
}