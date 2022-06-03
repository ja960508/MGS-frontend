import { createStore, combineReducers } from "redux";

const INITIAL_STATE = 0;
const counterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(
  combineReducers({
    counter: counterReducer,
  })
);
