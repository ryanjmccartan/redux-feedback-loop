import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
      <Router>
        <Route exact path = "/" component = {Feeling}/>
        <Route exact path = "/understanding" component = {Understanding}/>
        <Route exact path = "/supported" component = {Supported}/>
        <Route exact path = "/comments" component = {Comments}/>
      </Router>
        <br/>
      </div>
    );
  }
}

export default App;
