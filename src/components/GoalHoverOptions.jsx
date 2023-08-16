export default function GoalHoverOptions() {
  return (
    <div className="text-sm rounded-lg shadow-md flex flex-wrap justify-around mb-2 animatecss animatecss-fadeIn">
      <button className="transition duration-300 ease-in-out bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded px-3 py-2 m-1 md:mx-2">
        Log Activity
      </button>
      <button className="transition duration-300 ease-in-out bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded px-3 py-2 m-1 md:mx-2">
        Show Details
      </button>
      <button className="transition duration-300 ease-in-out bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded px-3 py-2 m-1 md:mx-2">
        Edit Goal
      </button>
      <button className="transition duration-300 ease-in-out bg-white border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white rounded px-3 py-2 m-1 md:mx-2">
        Remove
      </button>
    </div>
  );
}
