import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router } from "react-router-dom";


import './styles/index.scss';
import "emoji-mart/css/emoji-mart.css";
import { Provider } from 'react-redux';
import store from './redux/store';
ReactDOM.render(

    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));