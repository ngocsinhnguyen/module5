import React from 'react';

const TodoForm = ({ task, setTask, handleSubmit }) => {
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter your task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="todo-input"
            />
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
};

export default TodoForm;
