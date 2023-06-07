import { useState, Fragment } from 'react';

import Dashboard from './components/Dashboard/Dashboard.componet';
import NavBar from './components/NavBar/NavBar.component';
import SideBar from './components/SideBar/SideBar.component';
import './index.css';

function App() {
	return (
		<Fragment >
			<NavBar />
			<div className='app-container'>
				<SideBar />
				<Dashboard />
			</div>
		</Fragment>
	);
}

export default App;
