import "./DeviceFrame.css";


export default function DeviceFrame({children}) {

    return (
        <div className="device">
            <div className="notch"/>
            {children}
        </div>
    );
}