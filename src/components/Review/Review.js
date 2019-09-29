import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    

    handleClick = () => {
        // make axios post request in function
        this.props.history.push('/success');
    }


    render() {
        return(
            <>
                {/* // display this.props.reduxState.reducer here */}
                {/* the button will submit post request to database and bring user to submission success page */}
                <h1>Here is the review of your feedback!</h1>
                <button onClick ={this.handleClick}>Submit</button>
            </>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Comments);