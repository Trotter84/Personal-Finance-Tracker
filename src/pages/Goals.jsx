import DeviceFrame from "../components/layout/DeviceFrame";
import StatusBar from "../components/layout/StatusBar";
import BottomNav from "../components/navigation/BottomNav";

import GoalCard from "../components/cards/GoalCard";

import {Plus} from "lucide-react";

import {goals} from "../data/goals";

import "./Goals.css";


export default function Goals() {

    return (
        <DeviceFrame>
            <StatusBar/>
            <div className="screenBody">
                <div className="pageHeader">
                    <h2>
                        Goals
                    </h2>
                    <button className="roundButton">
                        <Plus size={18}/>
                    </button>
                </div>
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
            <BottomNav/>
        </DeviceFrame>
    );
}