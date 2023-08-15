// src/reducers/counter.ts
import { ActionTypes, INCREMENT, DECREMENT } from "../actions/CounterAction";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterReducer = (state = initialState, action: ActionTypes): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default counterReducer;
