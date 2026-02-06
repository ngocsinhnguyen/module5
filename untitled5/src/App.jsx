import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import initialTodos from './data/todos.json';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: task,
        completed: false,
        userId: 1
      });

      alert(`Status: ${response.status} - Task created successfully!`);

      const newTodo = {
        ...response.data,
        id: todos.length + 1
      };
      setTodos([...todos, newTodo]);
      setTask('');
    } catch (error) {
      alert(`Error: ${error.response?.status || 'Unknown error'}`);
    }
  };

  return (
    <div className="todo-container">
      <h1 className="title">Todo List</h1>

      <TodoForm
        task={task}
        setTask={setTask}
        handleSubmit={handleSubmit}
      />

      <TodoList todos={todos} />
    </div>
  );
}

export default App;

