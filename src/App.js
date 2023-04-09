import React from "react";
import "./App.css";
import HomePage from "./Pages/homepage/homepage.components";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/Header/header.component";
import Sign from "./Pages/sign/sign.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign" component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
