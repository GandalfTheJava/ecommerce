import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import './index.css';
import App from './App';
import store from "./redux/store/store";

ReactDOM.render(
    //Parent component that will contain the store that is accessible by all child components within the app
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));