import {useEffect} from "react";


export default function Profile() {

    useEffect(() => {
        document.title = "Profile"
    }, [])

    return (
        <>
            <div>
                <h1>Profile</h1>
            </div>
        </>
    )
}