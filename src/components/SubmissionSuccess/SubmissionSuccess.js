import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    
    // Empty out redux state, return to home page
    handleClick = () => {
        this.props.dispatch({type: 'EMPTY_FEEDBACK'})
        console.log('feedback reducers emptied');
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

export default connect()(Comments);