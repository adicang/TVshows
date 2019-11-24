import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MyNav from './components/MyNav';
import MainScreen from './components/MainScreen';
import SingleShowScreen from './components/SingleShowScreen';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MyNav />
          <Switch>
            <Route path="/" exact component={MainScreen}></Route>
            <Route path="/singleShow" component={SingleShowScreen}></Route>
          </Switch>
          <footer></footer>
        </div>
      </Router>
    );
  }
}


export default App;
