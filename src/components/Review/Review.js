import React, {Component} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';

class Comments extends Component {
    

    handleClick = () => {
        // make axios post request in function
        this.props.history.push('/success');
    }


    render() {
        return(
            <Router>
                {/* // display this.props.reduxState.reducer here */}
                {/* the button will submit post request to database and bring user to submission success page */}
                <button onClick ={this.handleClick}>Next</button>
            </Router>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Comments);