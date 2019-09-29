import React, {Component} from 'react';
import {connect} from 'react-redux';

class Supported extends Component {

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
        console.log('supported:', this.state.value);
        if(this.state.value === ''){
            alert("Please choose a number.");
        }
        else{
        this.props.dispatch({type: 'ADD_SUPPORTED', payload: this.state.value});
        this.props.history.push('/comments');
        }
    }

    render() {
        return(
            <>
                <h1>How well are you being supported?</h1>
                <p>On a scale of 1-5, 1 being the worst and 5 being the best.</p>
                <input onChange={this.handleChange} type="number" min="1" max="5"/> 
                <button onClick ={this.handleClick}>Next</button>
            </>
        )
    }
}

export default connect()(Supported);