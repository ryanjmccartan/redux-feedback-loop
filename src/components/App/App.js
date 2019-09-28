import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';

// import components
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';


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
        <Route exact path = "/review" component = {Review}/>
        <Route exact path = "/success" component = {SubmissionSuccess}/>
      </Router>
        <br/>
      </div>
    );
  }
}

export default App;
