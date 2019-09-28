import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
// import Understanding from '../Understanding/Understanding'
import {connect} from 'react-redux';


class Feeling extends Component {

state = {
    value: ''
}


handleChange = (event) => {
    this.setState({
        value: event.target.value
    })
}

handleClick = () => {
    console.log(this.state.value);
    this.props.dispatch({type: 'SET_FEEDBACK', payload: this.state.value})
    this.props.history.push('/understanding');
}


    render() {
        return(
        <Router>
            <h1>How are you feeling today?</h1>
            <p>On a scale of 1-5, 1 being the worst and 5 being the best.</p>
            <input onChange={this.handleChange} type="number"/> 
            <Link to="/understanding"><button onClick={this.handleClick}>Next</button></Link>
    </Router>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Feeling);