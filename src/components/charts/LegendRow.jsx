import "./LegendRow.css";


export default function LegendRow({
                                      color,
                                      label,
                                      amount
                                  }) {

    return (
        <div className="legendRow">
            <div className="legendLeft">
                <span
                    className="legendColor"
                    style={{background: color}}
                />
                {label}
            </div>
            <strong>
                ${amount}
            </strong>
        </div>
    );
}