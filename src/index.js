import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/rootReducer'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


const createApp = () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
} 

ReactDOM.render(createApp(), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
