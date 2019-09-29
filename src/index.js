import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';



const feelingReducer = (state = [], action) => {
    console.log('hello from feelingReducer', action.payload);
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
    console.log('hello from understandingReducer', action.payload);
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
    console.log('hello from supportedReducer', action.payload);
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
    console.log('hello from commentsReducer', action.payload);
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