const buttonStyle =
  "transition duration-300 ease-in-out bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded px-3 py-2 m-1 md:mx-2";

export default function GoalHoverOptions({
  goal,
  showingDetails,
  handleGoalsDisplayingDetails,
}) {
  return (
    <div className="text-sm rounded-lg flex flex-wrap justify-around mb-2 animatecss animatecss-fadeIn">
      <button className={buttonStyle}>Log Activity</button>
      <button
        onClick={() => handleGoalsDisplayingDetails(goal)}
        className={buttonStyle}
      >
        {showingDetails ? "Hide details" : "Show Details"}
      </button>
      <button className={buttonStyle}>Edit Goal</button>
      <button className={buttonStyle}>Remove</button>
    </div>
  );
}
