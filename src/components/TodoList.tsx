// src/components/TodoList.tsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../actions/TodoAction";
import { RootState } from "../reducers";

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
