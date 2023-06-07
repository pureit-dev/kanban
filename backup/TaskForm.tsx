// src/components/AddTaskForm.tsx

import React, { useState } from 'react';

// The onAddTask function prop takes a string parameter. TypeScript enforces that we call it with a string.
type AddTaskFormProps = {
	onAddTask: (title: string) => void;
};

// This component takes AddTaskFormProps as props.
const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
	// TypeScript enforces that the state must always be a string.
	const [title, setTitle] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		// React.FormEvent is a TypeScript type that represents a form event.
		e.preventDefault();
		onAddTask(title);
		setTitle('');
	};

	// TypeScript ensures that we're using the right event handler prop names and types.
	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				required
			/>
			<input type='submit' value='Add Task' />
		</form>
	);
};

export default AddTaskForm;
