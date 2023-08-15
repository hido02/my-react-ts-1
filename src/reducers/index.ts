// src/reducers/index.ts
import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import todosReducer from './TodoReducer';

interface RootReducerState {
  counter: ReturnType<typeof counterReducer>;
  todos: ReturnType<typeof todosReducer>
}

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer,
});

export default rootReducer;
export type RootState = RootReducerState;
