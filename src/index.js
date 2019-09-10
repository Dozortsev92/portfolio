import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './dashboard_template/dashboard.css';
import './index.css';

import store from "./redux/redux-store";

ReactDOM.render(
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/>,
    document.getElementById('root')
);

store.subscribe(() => {
    console.log('rerender =)');
});