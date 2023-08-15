// src/reducers/todos.ts
import { ActionTypes, ADD_TODO, TOGGLE_TODO } from "../actions/TodoAction";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosReducer = (state = initialState, action: ActionTypes): TodosState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};

export default todosReducer;
