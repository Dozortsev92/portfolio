import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './dashboard_template/dashboard.css';
import './index.css';

import store from "./redux/redux-store";
import {Provider} from "react-redux";

ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
);

store.subscribe(() => {
    console.log('rerender =)');
});