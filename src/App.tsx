import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './pages/Todo';
import UserList from './pages/UserList';
import Counter from './pages/Counter';
// import TodoList from './pages/TodoList';
import Gallery from './pages/Gallery';
import './Gallery.css';
import TodoApp from './pages/TodoApp';
import UserListAPI from './services/UserListAPI';
import LoginForm from './pages/LoginForm';
import Timer from './pages/Timer';
import TodoForm from './components/TodoForm';
import TodoList from './features/todos/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        <UserList/>
        <Counter />
        <TodoList />
        <Gallery />
        <TodoApp />
        <UserListAPI />
        <LoginForm />
        <Timer />
        <Counter/>
        {/* <TodoList /> */}
        <TodoList />
      </header>
    </div>
  );
}

export default App;
