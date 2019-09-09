import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './dashboard_template/dashboard.css';
import './index.css';

import store from "./redux/redux-store";

let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />,
        document.getElementById('root')
    );
    console.log('rerender =)');
};

reRenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRenderEntireTree(state);
});