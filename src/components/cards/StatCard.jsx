import "./StatCard.css";


export default function StatCard({
                                     title,
                                     amount,
                                     color,
                                     icon
                                 }) {

    return (
        <div className="statCard">
            <div
                className="statTitle"
                style={{color}}
            >
                {icon}
                <span>{title}</span>
            </div>
            <h3>{amount}</h3>
        </div>
    );
}