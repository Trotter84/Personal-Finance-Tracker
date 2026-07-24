import {useEffect} from "react";


export default function Reports() {

    useEffect(() => {
        document.title = "Reports"
    }, [])


    return (
        <>
            <div>
                <h1>Reports</h1>
            </div>
        </>
    )
}
