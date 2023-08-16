export default function GoalInfoBar() {
  return (
    // <div className="width-99 ml-1 mt-1 mr-1 bg-blue-900 rounded grid grid-cols-4 align-middle p-4 text-sm font-subtitle text-white">
    <div className="grid grid-cols-4 text-base text-white m-2 ${appliedStyle} items-center bg-blue-900 rounded pt-2 pb-2">
      <h1 className="flex items-center justify-center mr-4">⏹️</h1>
      <h1 className="flex items-center justify-center">Goal Name</h1>
      <h1 className="flex items-center justify-center">Last Update</h1>
      <h1 className="flex items-center justify-center">Units Logged</h1>
    </div>
  );
}
