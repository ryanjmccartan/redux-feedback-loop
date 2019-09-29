import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

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
        this.props.history.push('/review');
    }


    render() {
        return(
            <>
                <h1>Any comments you want to leave?</h1>
                <input onChange={this.handleChange} type="text"/> 
                <button onClick ={this.handleClick}>Next</button>
            </>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Comments);