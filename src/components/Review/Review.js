import React, {Component} from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Comments extends Component {
    

    handleClick = () => {
        // make axios post request in function
        console.log(this.state.value);
        this.props.dispatch({type: 'SET_FEEDBACK', payload: this.state.value})
        // this.props.history.push('/supported');
    }


    render() {
        return(
            <Router>
                {/* // this.props.reduxState.reducer here */}
                <Link to="/comments"><button onClick ={this.handleClick}>Next</button></Link>
            </Router>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Comments);