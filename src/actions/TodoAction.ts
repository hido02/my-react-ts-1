// src/actions/index.ts
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export type ActionTypes = AddTodoAction | ToggleTodoAction;

let nextTodoId = 1;

export const addTodo = (text: string): ActionTypes => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    text,
    completed: false,
  },
});

export const toggleTodo = (id: number): ActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});
