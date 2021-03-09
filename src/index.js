import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';


import {createStore, applyMiddleware} from 'redux';
import combineReducers from "./redux/reducers/rootReducer";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'


const store = createStore(combineReducers, applyMiddleware(thunk))
const apiKey = '093865189a3f61768b261e1874beea6f';

localStorage.setItem('api', apiKey);


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


