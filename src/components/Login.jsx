import {useEffect} from "react";


export default function Login() {

    useEffect(() => {
        document.title = "Login"
    }, []);


    return (
        <>
            <div>
                <h1>Login</h1>
            </div>
        </>
    )
}