import {useEffect} from "react";


export default function Goals() {

    useEffect(() => {
        document.title = "Goals"
    }, [])


    return (
        <>
            <div>
                <h1>Goals</h1>
            </div>
        </>
    )
}