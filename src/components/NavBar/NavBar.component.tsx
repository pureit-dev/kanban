import React from 'react';
import './NavBar.style.css';

const NavBar: React.FC = () => {
	return (
		<nav className='navbar'>
			<img src='/assets/logo-light.svg' alt='kanban logo' />
			<h1>Kanban</h1>
		</nav>
	);
};

export default NavBar;
