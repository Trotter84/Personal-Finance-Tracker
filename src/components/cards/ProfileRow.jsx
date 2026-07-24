import "./ProfileRow.css";
import {ChevronRight} from "lucide-react";


export default function ProfileRow({
                                       icon,
                                       title,
                                       subtitle
                                   }) {

    return (
        <div className="profileRow">
            <div className="profileLeft">
                <div className="profileIcon">
                    {icon}
                </div>
                <div>
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
            <ChevronRight size={18}/>
        </div>
    );
}