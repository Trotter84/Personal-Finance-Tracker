import DeviceFrame from "./DeviceFrame";
import StatusBar from "./StatusBar";
import BottomNav from "../navigation/BottomNav";


export default function PageLayout({
                                       children,
                                       showNavigation = true
                                   }) {

    return (
        <DeviceFrame>
            <StatusBar/>
            <main className="screenBody">
                {children}
            </main>
            {showNavigation && <BottomNav/>}
        </DeviceFrame>
    );
}