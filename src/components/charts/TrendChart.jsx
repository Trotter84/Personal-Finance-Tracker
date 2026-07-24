import "./TrendChart.css";
import {useApp} from "../../context/AppContext.jsx"


export default function TrendChart() {

    const {reports} = useApp();

    const data = reports.monthlyTrend;

    const max = Math.max(...reports.monthlyTrend.map(x => x.amount));

    return (
        <div className="trendChart">
            {
                data.map(month => (
                    <div
                        key={month.month}
                        className="barColumn"
                    >
                        <div
                            className="bar"
                            style={{
                                height: `${(month.amount / max) * 180}px`
                            }}>
                        </div>
                        <span>{month.month}</span>
                    </div>
                ))
            }
        </div>
    );
}