import React from "react";
import Card from "./Card/Card";
import "./App.css";

//Welcome to Alpha Vantage! Your API key is: 8FQ71F4F56GIS2N4.
//Please record this API key for lifetime access to Alpha Vantage.

const App = props => (
  <div className="App">
    <Card title="Snap Inc" subtitle="NYSE: SNAP" detail="17.88 USD 1.25% ^" />
  </div>
);

export default App;
