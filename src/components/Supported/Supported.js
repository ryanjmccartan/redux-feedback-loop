import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Supported extends Component {

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
        this.props.history.push('/comments');
    }


    render() {
        return(
            <Router>
                <h1>How are you being supported?</h1>
                <input onChange={this.handleChange} type="number"/> 
                <Link to="/comments"><button onClick ={this.handleClick}>Next</button></Link>
            </Router>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Supported)