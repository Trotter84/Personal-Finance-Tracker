import "./TransactionRow.css";


export default function TransactionRow({
                                           icon,
                                           title,
                                           subtitle,
                                           amount
                                       }) {

    const positive = amount > 0;

    return (
        <div className="transactionRow">
            <div className="transactionIcon">
                {icon}
            </div>
            <div className="transactionInfo">
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
            <div
                className={
                    positive
                        ?
                        "transactionAmount income"
                        :
                        "transactionAmount expense"
                }
            >
                {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD"
                }).format(amount)}
            </div>
        </div>
    );
}