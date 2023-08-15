// src/components/TodoForm.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/TodoAction";

const TodoForm: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
