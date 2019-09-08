import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './dashboard_template/dashboard.css';
import './index.css';

import store from "./redux/state";

const reRenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
    console.log('rerender =)');
};

reRenderEntireTree();

store.subscribe(reRenderEntireTree);