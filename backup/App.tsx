// src/App.tsx

import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import AddTaskForm from './components/AddTaskForm';

// Define the structure of a task using TypeScript's type alias feature.
type Task = {
	id: number;
	title: string;
	completed: boolean;
};

// TypeScript can check the types of props, state, and context in functional components with React.FC.
const App: React.FC = () => {
	// Use TypeScript with the useState hook by passing the state type as a type parameter.
	const [tasks, setTasks] = useState<Task[]>([
		{ id: 1, title: 'Learn React', completed: false },
		{ id: 2, title: 'Learn TypeScript', completed: false },
	]);

	// TypeScript checks that the function parameters and return type match what's expected.
	const addTask = (title: string) => {
		const newTask: Task = {
			id: Date.now(),
			title,
			completed: false,
		};

		setTasks((tasks) => [...tasks, newTask]);
	};

	const deleteTask = (id: number) => {
		setTasks((tasks) => tasks.filter((task) => task.id !== id));
	};

	const toggleTask = (id: number) => {
		setTasks((tasks) =>
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	// When rendering components, TypeScript checks that the props match the expected types.
	return (
		<div>
			<AddTaskForm onAddTask={addTask} />
			{tasks.map((task) => (
				<TaskItem
					key={task.id}
					task={task}
					onDeleteTask={deleteTask}
					onToggleTask={toggleTask}
				/>
			))}
		</div>
	);
};

export default App;
