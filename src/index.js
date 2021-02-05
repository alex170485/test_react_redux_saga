import React from 'react';
import render from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReduser} from "./redux/rootReduser";
import {Provider} from "react-redux";
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {sagaWatcher} from "./redux/sagas";


const saga = createSagaMiddleware()

const store = createStore(rootReduser, compose (
    applyMiddleware(
      thunk, saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
saga.run(sagaWatcher)


ReactDOM.render(
    <Provider store={store}>
    <React.StrictMode>
        <App />

    </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
