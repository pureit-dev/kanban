import React from 'react';
import data from '../../../data.json';

const SideBar: React.FC = () => {
	return (
		<div>
			{data.boards.map((board: { name: string }) => {
				return (
					<div key={board.name}>
						<h1>{board.name}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default SideBar;
