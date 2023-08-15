import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from './todoSlice';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={completed} onChange={handleToggle} />
        {text}
      </label>
    </div>
  );
};

export default TodoItem;
