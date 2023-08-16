export default function TotalGoalInfoBar() {
  return (
    <div className="m-2 bg-blue-900 rounded  text-white font-subtitle">
      <h1 className="text-lg text-center">Total Goal Activity</h1>
      <div className=" grid grid-cols-4 align-middle text-sm">
        <div className="flex flex-col items-center justify-center text-center mr-4 -ml-2">
          <h2>🌱</h2>
          <h2>Total Goals</h2>
          <h2>5</h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center mr-4">
          <h2>📈</h2>
          <h2>Activities Logged</h2>
          <h2>26</h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center mr-4 ml-2">
          <h2>📊</h2>
          <h2>Units Logged</h2>
          <h2>432</h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h2>📅</h2>
          <h2>Days of Activity</h2>
          <h2>14</h2>
        </div>
      </div>
    </div>
  );
}
