import {useState} from "react";
import {useNavigate} from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";

import Logo from "../components/ui/Logo";
import TextInput from "../components/ui/TextInput";
import PrimaryButton from "../components/ui/PrimaryButton";

import {Mail, Lock} from "lucide-react";

import "./Login.css";


export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    function login() {
        navigate("/dashboard");
    }

    return (
        <PageLayout showNavigation={false}>
            <div className="loginPage">

                <Logo/>

                <TextInput
                    label="Email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    icon={<Mail size={18}/>}
                />

                <TextInput
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    icon={<Lock size={18}/>}
                />

                <div className="forgotPassword">
                    Forgot password?
                </div>

                <PrimaryButton onClick={login}>
                    Log In
                </PrimaryButton>
                <div className="loginDivider">
                    <span/>
                    OR
                    <span/>
                </div>
                <button className="faceButton">
                    Continue with Face ID
                </button>
                <div className="signup">
                    New here?
                    <span>Create account</span>
                </div>
            </div>
        </PageLayout>
    );
}