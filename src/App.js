import React from "react";
import "./App.css";
import HomePage from "./Pages/homepage/homepage.components";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Pages/Shop/shop.component";

function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
