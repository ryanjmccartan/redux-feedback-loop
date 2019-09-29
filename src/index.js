import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

// Reducers
const feelingReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_FEELING':
            return [...state, action.payload];
        case 'EMPTY_FEEDBACK':
            return [];
        default: 
            return state    
    }
}

const understandingReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_UNDERSTANDING':
            return [...state, action.payload];
        case 'EMPTY_FEEDBACK':
            return [];
        default: 
            return state    
    }
}

const supportedReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_SUPPORTED':
            return [...state, action.payload];
        case 'EMPTY_FEEDBACK':
            return [];
        default: 
            return state    
    }
}

const commentsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_COMMENTS':
            return [...state, action.payload];
        case 'EMPTY_FEEDBACK':
            return [];
        default: 
            return state    
    }
}

const storeInstance = createStore (
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();