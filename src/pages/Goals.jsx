import PageLayout from "../components/layout/PageLayout";
import StatusBar from "../components/layout/StatusBar";

import GoalCard from "../components/cards/GoalCard";

import {Plus} from "lucide-react";

import {useApp} from "../context/AppContext"

import "./Goals.css";
import PageHeader from "../components/layout/PageHeader";


export default function Goals() {

    const {goals} = useApp();

    return (
        <PageLayout>
            <StatusBar/>
            <div className="screenBody">
                <PageHeader title="Goals">
                    <button className="roundButton">
                        <Plus size={18}/>
                    </button>
                </PageHeader>
                {
                    goals.map(goal => (
                        <GoalCard
                            key={goal.id}
                            {...goal}
                        />
                    ))
                }
                <div className="addGoalCard">
                    + Add New Goal
                </div>
            </div>
        </PageLayout>
    );
}