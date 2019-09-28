import React, {Component} from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
// import Understanding from '../Understanding/Understanding'


class Feeling extends Component {

state = {
    feeling: ''
}


handleChange = (event) => {
    this.setState({
        feeling: event.target.value
    })
    console.log(this.state.feeling)
}


    render() {
        return(
        <Router>
            <h1>How are you feeling today?</h1>
            <p>On a scale of 1-5, 1 being the worst and 5 being the best.</p>
            <input onChange={this.handleChange} type="number"/> 
            <Link to="/understanding"><button onClick={this.handleSubmit}>Next</button></Link>
    </Router>
        )
    }
}

export default Feeling