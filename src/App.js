import React from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import SignInAndSignUp from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/Shop" component={ShopPage} />
        <Route path="/SignIn" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;
