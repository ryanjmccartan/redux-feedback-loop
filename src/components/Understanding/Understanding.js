import React, {Component} from 'react';
import {connect} from 'react-redux';

class Understanding extends Component {

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
        console.log('understanding:', this.state.value);
        if(this.state.value === ''){
            alert("Please choose a number.");
        }
        else{
        this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.value});
        this.props.history.push('/supported');
        }
    }

    render() {
        return(
            <>
                <h1>How well are you understanding the content?</h1>
                <p>On a scale of 1-5, 1 being the worst and 5 being the best.</p>
                <input onChange={this.handleChange} type="number" min="1" max="5"/> 
                <button onClick ={this.handleClick}>Next</button>
            </>
        )
    }
}

export default connect()(Understanding);