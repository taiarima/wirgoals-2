import { useState } from "react";
import NavBar from "./components/NavBar";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";

function App() {
  return (
    <div>
      <NavBar />
        <LeftPane />
        <RightPane />
    </div>
  );
}

export default App;
