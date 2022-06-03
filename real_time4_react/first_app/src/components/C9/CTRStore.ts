import { createStore, combineReducers } from "redux";

const INITIAL_STATE = "";
const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const CTRstore = createStore(
  combineReducers({
    user: userReducer,
  })
);
