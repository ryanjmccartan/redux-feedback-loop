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
    
    // handleClick function sends value to redux state
    handleClick = () => {
        console.log('comments:', this.state.value);
        this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.value})
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

export default connect()(Comments);