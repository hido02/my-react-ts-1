// src/actions/index.ts
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export interface IncrementAction {
  type: typeof INCREMENT;
}

export interface DecrementAction {
  type: typeof DECREMENT;
}

export type ActionTypes = IncrementAction | DecrementAction;

export const increment = (): ActionTypes => ({
  type: INCREMENT,
});

export const decrement = (): ActionTypes => ({
  type: DECREMENT,
});
