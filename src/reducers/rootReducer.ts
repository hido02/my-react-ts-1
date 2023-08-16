// src/reducers/index.ts
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import todosReducer from './TodoReducer';

const reducer  = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
