import { useState, Fragment } from 'react';

import Dashboard from './components/Dashboard/Dashboard.componet';
import NavBar from './components/NavBar/NavBar.component';
import SideBar from './components/SideBar/SideBar.component';
import './index.css';
import data from '../data.json';

interface Subtask {
	title: string;
	isCompleted: boolean;
}

interface Task {
	title: string;
	description: string;
	status: string;
	subtasks: Subtask[];
}

interface Column {
	name: string;
	tasks: Task[];
}

interface Board {
	name: string;
	columns: Column[];
}

const App: React.FC = () => {
	const [boards, setBoards] = useState<Board>({ name: '', columns: [] });

	return (
		<Fragment>
			<NavBar />
			<div className='app-container'>
				<SideBar />
				<Dashboard />
			</div>
		</Fragment>
	);
};

export default App;
