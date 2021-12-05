
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Switch>
          <Route exact strict path="/"><News pageSize={5} country="in" category="general"/></Route>
          <Route exact strict path="/business" ><News key="business" pageSize={5} country="in" category="business"/></Route>
          <Route exact strict path="/entertainment" ><News key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact strict path="/health" ><News key="health" pageSize={5} country="in" category="health"/></Route>
          <Route exact strict path="/science" ><News key="science" pageSize={5} country="in" category="science"/></Route>
          <Route exact strict path="/sports" ><News key="sports" pageSize={5} country="in" category="sports"/></Route>
          <Route exact strict path="/technology" ><News key="technology" pageSize={5} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

