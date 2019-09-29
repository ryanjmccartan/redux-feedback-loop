import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    

    handleClick = () => {
        // create dispatch that clears the feedback
        this.props.dispatch({type: 'EMPTY_FEEDBACK'})
        this.props.history.push('/');       
    }


    render() {
        return(
        <>
            <h1>Thank you for your feedback!</h1>
            <button onClick={this.handleClick}>Leave New Feedback</button>
        </>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Comments);