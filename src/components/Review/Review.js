import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {


    state = {
        object: {
            feeling: this.props.reduxState.feelingReducer,
            understanding: this.props.reduxState.understandingReducer,
            supported: this.props.reduxState.supportedReducer,
            comments: this.props.reduxState.commentsReducer
        }
    }
    

    handleClick = () => {
        // make axios post request in function
        this.props.history.push('/success');
    }


    render() {
        return(
            <>
                <h1>Here is the review of your feedback!</h1>
                {/* // display this.props.reduxState.reducer here */}
                    <p>
                    Feeling: {this.state.object.feeling}
                    <br/>
                    Understanding: {this.state.object.understanding}
                    <br/>
                    Supported: {this.state.object.supported}
                    <br/>
                    Comments: {this.state.object.comments}              
                    </p>
                    
                {/* <p>{JSON.stringify(this.props.reduxState)}</p> */}

                {/* the button will submit post request to database and bring user to submission success page */}
                <button onClick ={this.handleClick}>Submit Feedback</button>
            </>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Comments);