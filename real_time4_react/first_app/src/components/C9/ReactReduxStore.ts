import { createStore, combineReducers } from "redux";

const INITIAL_STATE = { id: "", name: "" };
const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, id: action.payload };
    case "LOGOUT":
      return INITIAL_STATE;
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    user: userReducer,
  })
);

export default store;
