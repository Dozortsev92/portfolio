import React from 'react';
import ReactDOM from 'react-dom';
import './dashboard_template/dashboard.css';
import './index.css';
import App from './App';
import state from './redux/state.js';
import {addReview} from './redux/state.js';

let reRenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addReview={addReview} />,
        document.getElementById('root')
    );
};

reRenderEntireTree();