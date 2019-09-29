import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const feedbackReducer = (state = [], action) => {
    console.log('hello from reducer', action.payload);
    switch(action.type){
        case 'SET_FEEDBACK':
            return [...state, action.payload];
        default: 
            return state    
    }
}


const storeInstance = createStore (
    combineReducers({
        feedbackReducer
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();