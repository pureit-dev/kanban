// src/components/TaskItem.tsx

import React from 'react';

// Import the Task type from the parent component to keep things DRY.
type Task = {
	id: number;
	title: string;
	completed: boolean;
};

// Define the props for this component. onDeleteTask and onToggleTask are functions that take a number.
type TaskItemProps = {
	task: Task;
	onDeleteTask: (id: number) => void;
	onToggleTask: (id: number) => void;
};

// This component takes TaskItemProps as props. TypeScript will enforce this.
const TaskItem: React.FC<TaskItemProps> = ({
	task,
	onDeleteTask,
	onToggleTask,
}) => (
	<div>
		<p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
			{task.title}
		</p>
		<button onClick={() => onDeleteTask(task.id)}>Delete</button>
		<button onClick={() => onToggleTask(task.id)}>
			{task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
		</button>
	</div>
);

export default TaskItem;
