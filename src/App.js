import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
            <Route path={process.env.PUBLIC_URL +"/"}  exact component={MainScreen}></Route>
            <Route path={process.env.PUBLIC_URL +"/singleShow"} exact  component={SingleShowScreen}></Route>
            <Route path={process.env.PUBLIC_URL +"/favorites"} exact component={favorites}></Route>
          </Switch>
          <footer></footer>
        </div>
      </Router>
    );
  }
}

export default App;
