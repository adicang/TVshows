import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import MyNav from "./components/MyNav";
import MainScreen from "./components/MainScreen";
import SingleShowScreen from "./components/SingleShowScreen";
import favorites from "./components/favorites";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MyNav />
          <Switch>
            <Route path="/" exact component={MainScreen}></Route>
            <Route path="/singleShow" exact component={SingleShowScreen}></Route>
            <Route path="/favorites" exact component={favorites}></Route>
          </Switch>
          <footer></footer>
        </div>
      </Router>
    );
  }
}

export default App;
