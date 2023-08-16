// src/reducers/index.ts
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import todosReducer from './TodoReducer';
import dataReducer from '../features/data/dataSlice';

const reducer  = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  data: dataReducer,
});

export type RootState = ReturnType<typeof reducer>;
export default reducer;
