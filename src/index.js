import React from 'react';
import ReactDOM from 'react-dom';
import './dashboard_template/dashboard.css';
import './index.css';
import App from './App';
import state from './redux/state.js';

ReactDOM.render(<App data={state} />, document.getElementById('root'));