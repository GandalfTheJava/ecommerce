import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';
import SignInAndSignUp from "../src/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
    });

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Shop" component={ShopPage} />
          <Route path="/SignIn" component={SignInAndSignUp} />
        </Switch>
      </div >
    );
  }

}

export default App;
