import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    

    handleClick = () => {
        this.props.history.push('/');
    }


    render() {
        return(
        <>
            <h1>Thank you for your feedback!</h1>
            {/* // add button here that will reset survey from the beginning  */}
            <button onClick={this.handleClick}>Leave New Feedback</button>
        </>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Comments);