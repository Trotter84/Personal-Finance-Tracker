import {useNavigate} from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";
import PageHeader from "../components/layout/PageHeader";
import StatusBar from "../components/layout/StatusBar";
import BottomNav from "../components/navigation/BottomNav";

import ProfileRow from "../components/cards/ProfileRow";
import PrimaryButton from "../components/ui/PrimaryButton";

import {profile, settings} from "../data/profile";

import "./Profile.css";


export default function Profile() {

    const navigate = useNavigate();

    function logout() {
        navigate("/");
    }

    return (
        <PageLayout>
            <StatusBar/>
            <div className="screenBody">
                <div className="profileCard">
                    <div className="profileAvatar">
                        {profile.avatar}
                    </div>
                    <h2>{profile.name}</h2>
                    <p>{profile.email}</p>
                    <span>
                        Member since {profile.memberSince}
                    </span>
                </div>
                {
                    settings.map(item => (
                        <ProfileRow
                            key={item.id}
                            {...item}
                        />
                    ))
                }
                <div className="logout">
                    <PrimaryButton onClick={logout}>
                        Log Out
                    </PrimaryButton>
                </div>
            </div>
            <BottomNav/>
        </PageLayout>
    );
}