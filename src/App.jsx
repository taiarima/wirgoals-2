import { useState } from "react";
import NavBar from "./components/NavBar";
import Pane from "./components/Pane";
import RightPane from "./components/RightPane";

function App() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row ml-20 mr-20">
        <Pane />
        {/* Goal List */}
        <Pane />
        {/* Top: Total Goal Summary
         * Bottom: Single Goal Summary */}
      </div>
    </div>
  );
}

export default App;
