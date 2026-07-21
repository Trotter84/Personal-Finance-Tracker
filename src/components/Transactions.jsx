import {useEffect} from "react";


export default function Transactions() {

    useEffect(() => {
        document.title = "Transactions"
    }, [])


    return (
        <>
            <div>
                <h1>Transactions</h1>
            </div>
        </>
    )
}