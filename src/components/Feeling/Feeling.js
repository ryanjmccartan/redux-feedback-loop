import React, {Component} from 'react';
import {connect} from 'react-redux';


class Feeling extends Component {

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
        if(this.state.value === ''){
            alert("Please choose a number");
        }
        else{
        this.props.dispatch({type: 'ADD_FEELING', payload: this.state.value});
        this.props.history.push('/understanding');
        }
    }


    render() {
        return(
            <div>
                <h1>How are you feeling today?</h1>
                <p>On a scale of 1-5, 1 being the worst and 5 being the best.</p>
                <input onChange={this.handleChange} type="number" min="1" max="5"/> 
                <button onClick={this.handleClick}>Next</button>
            </div>
        )
    }
}

const reduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(reduxStateOnProps)(Feeling);