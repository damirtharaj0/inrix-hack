import React from "react";
import Map from "./Map";
import getRoute from "./Api";

function App() {

  const start = "37.770581%2C-122.442550"
  const end = "37.765297%2C-122.442527"
  getRoute(start, end);

  return (
    <Map />
  );
};

export default App;