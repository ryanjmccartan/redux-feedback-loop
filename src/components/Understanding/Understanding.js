import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Understanding extends Component {

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
        this.props.history.push('/supported');
    }

    render() {
        return(
            <Router>
                <h1>How well are you understanding the content?</h1>
                <input onChange={this.handleChange} type="number"/> 
                <Link to="/supported"><button onClick ={this.handleClick}>Next</button></Link>
            </Router>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Understanding);