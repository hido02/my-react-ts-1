import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import '../App.css';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const TodoList: React.FC<{ todos: Todo[]; toggleTodo: (id: number) => void }> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
          {todo.text}
        </label>
      </li>
    ))}
  </ul>
);

const CompletedTodoList: React.FC<{ todos: Todo[]; toggleTodo: (id: number) => void }> = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo.id)} />
          <del>{todo.text}</del>
        </label>
      </li>
    ))}
  </ul>
);

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Buy groceries', done: false },
    { id: 2, text: 'Clean the house', done: false },
    { id: 3, text: 'Do laundry', done: false },
  ]);

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Todo App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">All</Link>
              </li>
              <li>
                <Link to="/completed">Completed</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<TodoList todos={todos} toggleTodo={toggleTodo} />} />
            <Route path="/completed" element={<CompletedTodoList todos={todos} toggleTodo={toggleTodo} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
};

export default TodoApp;
