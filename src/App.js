import React from "react";
import logo from "./logo.svg";
// import Calendar from "./Components/Calendar/Calendar";
import Options from "./Components/Options/Options";
import TestCal from "./Components/TestCal/TestCal";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Options />
      <TestCal />
    </div>
  );
}

export default App;
