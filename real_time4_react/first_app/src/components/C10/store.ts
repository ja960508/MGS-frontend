import { applyMiddleware } from "redux";
import { createStore, combineReducers } from "redux";
import { otherMiddleware, someMiddleware, thunkMiddlewere } from "./middleware";
import thunk from "redux-thunk";

const INITIAL_STATE = 0;
const counterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - (action.payload || 1);
    default:
      return state;
  }
};

const AUTH_INITIAL_STATE = { user: "", loading: false, error: null };

const authReducer = (state = AUTH_INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, loading: false };
    case "LOGIN_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return AUTH_INITIAL_STATE;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
