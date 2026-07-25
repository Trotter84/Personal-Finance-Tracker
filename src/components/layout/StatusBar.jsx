import {useEffect, useState} from "react";
import {
    Signal,
    Wifi,
    BatteryFull
} from "lucide-react";

import "./StatusBar.css";


export default function StatusBar() {

    const [time, setTime] = useState("");

    useEffect(() => {

        function updateClock() {

            const formatter = new Intl.DateTimeFormat([], {
                hour: "numeric",
                minute: "2-digit"
            });
            setTime(formatter.format(new Date()));
        }

        updateClock();

        const interval = setInterval(updateClock, 60000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="statusbar">
            <span className="clock">
                {time}
            </span>

            <div className="statusIcons">

                <Signal size={14}/>
                <Wifi size={14}/>
                <BatteryFull size={18}/>
                <span className="batteryPercent">
                    100
                </span>
            </div>
        </div>
    );
}