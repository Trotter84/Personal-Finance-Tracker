import {useNavigate} from "react-router-dom";

import PageLayout from "../components/layout/PageLayout";
import StatusBar from "../components/layout/StatusBar";

import ProfileRow from "../components/cards/ProfileRow";
import PrimaryButton from "../components/ui/PrimaryButton";
import Avatar from "../components/ui/Avatar";

import {settings} from "../data/profile";
import {useApp} from "../context/AppContext"

import "./Profile.css";


export default function Profile() {

    const {profile} = useApp();

    const navigate = useNavigate();

    function logout() {
        navigate("/");
    }

    return (
        <PageLayout>
            <div className="screenBody">
                <div className="profileCard">
                    <Avatar
                        src={profile.avatar}
                        initials={profile.initials}
                        size="large"
                    />
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
        </PageLayout>
    );
}