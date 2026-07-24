import "./GoalCard.css";


export default function GoalCard({
                                     icon,
                                     number,
                                     title,
                                     progress,
                                     current,
                                     target,
                                     due
                                 }) {

    return (
        <div className="goalCard">
            <div className="goalTop">
                <div className="goalIcon">
                    {icon}
                </div>
                <div className="goalInfo">
                    <span className="goalNumber">
                        {number}
                    </span>
                    <h3>{title}</h3>
                </div>
                <div className="goalPercent">
                    {progress}%
                </div>
            </div>
            <div className="progressTrack">
                <div
                    className="progressFill"
                    style={{
                        width: `${progress}%`
                    }}
                />
            </div>
            <div className="goalFooter">
                <span>
                    ${current.toLocaleString()} of ${target.toLocaleString()}
                </span>
                <span>{due}</span>
            </div>
        </div>
    );
}