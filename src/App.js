import React from "react";
import "./App.css";
import HomePage from "./Pages/homepage/homepage.components";
import { Switch, Route } from "react-router-dom";

const Hats = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </switch>
    </div>
  );
}

export default App;
