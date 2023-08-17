import { useState } from "react";
import NavBar from "./components/NavBar";
import Pane from "./components/Pane";
import GoalInfoBar from "./components/GoalInfoBar";
import GoalList from "./components/GoalList";
import TotalGoalSummary from "./components/TotalGoalSummary";
import SingleGoalSummary from "./components/SingleGoalSummary";
import TotalGoalInfoBar from "./components/TotalGoalInfoBar";
import Body from "./components/Body";

function App() {
  const goalObjects = [
    // {
    //   id: 0,
    //   emoji: "🌱",
    //   name: "Goal",
    //   units: "Total Activity",
    //   lastUpdated: "Last Updated",
    // },
    {
      id: 1,
      emoji: "🪅",
      name: "Study Korean",
      desc: "Read 10 pages every day",
      quota: 10,
      dateCreated: "01 JAN 2023",
      units: "Hours",
      accUnits: 27,
      activityLog: [
        {
          date: "2023-08-01",
          loggedUnits: "2",
          notes: "Started with basic vocabulary.",
        },
        {
          date: "2023-08-02",
          loggedUnits: "3",
          notes: "Reviewed sentence structure.",
        },
        {
          date: "2023-08-03",
          loggedUnits: "4",
          notes: "Struggled with verb conjugation.",
        },
        {
          date: "2023-08-04",
          loggedUnits: "5",
          notes: "Focused on listening exercises.",
        },
        {
          date: "2023-08-06",
          loggedUnits: "1",
          notes: "Quick review of earlier topics.",
        },
        {
          date: "2023-08-07",
          loggedUnits: "2",
          notes: "Started a new chapter on family.",
        },
        {
          date: "2023-08-10",
          loggedUnits: "4",
          notes: "Practiced speaking with a partner.",
        },
      ],
      lastUpdated: "04 AUG 2023",
    },
    {
      id: 2,
      emoji: "🏋️",
      name: "Work out",
      units: "Days",
      accUnits: 10,
      activityLog: [{ date: "04 AUG 2023", loggedUnits: "4" }],
      lastUpdated: "04 AUG 2023",
    },
    {
      id: 3,
      emoji: "📖",
      name: "Read literature",
      units: "Pages",
      accUnits: 42,
      activityLog: [{ date: "04 AUG 2023", loggedUnits: "4" }],
      lastUpdated: "04 AUG 2023",
    },
    {
      id: 4,
      emoji: "🎹",
      name: "Practice piano",
      units: "Hours",
      accUnits: 27,
      activityLog: [{ date: "04 AUG 2023", loggedUnits: "4" }],
      lastUpdated: "04 AUG 2023",
    },
    {
      id: 5,
      emoji: "🥵",
      name: "Stay sober",
      units: "Days",
      accUnits: 13,
      activityLog: [{ date: "04 AUG 2023", loggedUnits: "4" }],
      lastUpdated: "04 AUG 2023",
    },
  ];

  const [selectedGoal, setSelectedGoal] = useState(goalObjects.at(0));

  const [goalsDisplayingDetails, setGoalsDisplayingDetails] = useState([]);

  function handleGoalsDisplayingDetails(goal) {
    setGoalsDisplayingDetails((prevGoals) => {
      if (prevGoals.includes(goal.id)) {
        return prevGoals.filter((g) => g !== goal.id);
      } else {
        return [...prevGoals, goal.id];
      }
    });
  }

  return (
    <>
      <NavBar />
      <Body>
        <Pane>
          <GoalInfoBar />
          <GoalList
            goalList={goalObjects}
            handleGoalsDisplayingDetails={handleGoalsDisplayingDetails}
            goalsDisplayingDetails={goalsDisplayingDetails}
          />
        </Pane>
        <Pane>
          <TotalGoalInfoBar />
          {/* <TotalGoalSummary /> */}
          {goalsDisplayingDetails.length > 0 &&
            goalObjects
              .filter((goal) => goalsDisplayingDetails.includes(goal.id))
              .map((goal) => <SingleGoalSummary key={goal.id} goal={goal} />)}
        </Pane>
      </Body>
    </>
  );
}

export default App;
