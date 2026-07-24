import "./TrendChart.css";
import {monthlyTrend} from "../../data/reports";


export default function TrendChart() {

    const max = Math.max(...monthlyTrend.map(x => x.amount));

    return (
        <div className="trendChart">
            {
                monthlyTrend.map(month => (
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