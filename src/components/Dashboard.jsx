import {useEffect} from "react";


export default function Dashboard() {
    useEffect(() => {
        document.title = "Dashboard"
    }, []);


    return (
        <>
            <div>
                <h1>Dashboard</h1>
                
            </div>
        </>
    )
}