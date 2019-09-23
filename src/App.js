import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

let App = () => {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <Content/>
                </div>
            </div>
        </div>
    );
};

export default App;