import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { BrowserRouter } from 'react-router-dom';


function App(props) {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="container-fluid">
				<div className="row">
					<Sidebar />
					<Content data={props.data} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;