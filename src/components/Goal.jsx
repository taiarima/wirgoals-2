import GoalHoverOptions from "./GoalHoverOptions";
import { useState } from "react";

export default function Goal({ goal, selectedGoal, handleSelectedGoal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <li
        onClick={() => handleSelectedGoal(goal)}
        className={`grid grid-cols-4 text-base text-blue-700 mb-2 ml-2 mr-2 rounded cursor-pointer ${
          isHovered ? "bg-gold" : "bg-white"
        } items-center`}
      >
        <div className="flex items-center justify-center mr-4">
          {goal.emoji}
        </div>
        <div className="flex items-center justify-center">{goal.name}</div>
        <div className="flex items-center justify-center">
          {goal.lastUpdated ?? "No activities logged"}
        </div>
        <div className="flex items-center justify-center">
          {goal.accUnits} {goal.units}
        </div>
      </li>
      {isHovered && <GoalHoverOptions />}
    </div>
  );
}
