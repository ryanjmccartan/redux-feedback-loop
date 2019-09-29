import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Comments extends Component {

    state = {
        feedbackObject: {
            feeling: Number(this.props.reduxState.feelingReducer),
            understanding: Number(this.props.reduxState.understandingReducer),
            supported: Number(this.props.reduxState.supportedReducer),
            comments: this.props.reduxState.commentsReducer
        }
    }
    
    // POST request
    handleClick = () => {
        axios.post('/feedback', this.state.feedbackObject).then(response => {
            console.log('Added feedback to database:', response);
        }).catch(error => {
            console.log('error with POST request', error)
        })
        this.props.history.push('/success');
    }

    render() {
        return(
            <>
                <h1>Here is a review of your feedback!</h1>
                    <p>
                    Feeling: {this.state.feedbackObject.feeling}
                    <br/>
                    Understanding: {this.state.feedbackObject.understanding}
                    <br/>
                    Support: {this.state.feedbackObject.supported}
                    <br/>
                    Comments: {this.state.feedbackObject.comments}             
                    </p>
                <button onClick ={this.handleClick}>Submit Feedback</button>
            </>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Comments);