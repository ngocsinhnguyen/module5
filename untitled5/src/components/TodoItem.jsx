import React from 'react';

const TodoItem = ({ todo }) => {
    return (
        <li className="todo-item">
            <span className="todo-text">
                {todo.title}
            </span>
        </li>
    );
};

export default TodoItem;
