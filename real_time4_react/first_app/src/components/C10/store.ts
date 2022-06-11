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

const getCookie = (targetKey: string) => {
  const currentCookies = document.cookie
    .split(";")
    .map((item) => item.split("="));
  let result = null;

  result = currentCookies.find((item) => item[0] === targetKey);

  return result ? result[1] : result;
};

const setCookie = (key: string, value: string) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 14);

  document.cookie = `${key} = ${value}; expires = ${expires.toUTCString()}`;
};

const deleteCookie = (key: string) => {
  const expires = new Date();
  expires.setDate(expires.getDate() - 1);
  document.cookie = `${key} = ; expires = ${expires.toUTCString()}`;
};

const AUTH_INITIAL_STATE = () => ({
  user: getCookie("user"),
  loading: false,
  error: null,
});

const authReducer = (state = AUTH_INITIAL_STATE(), action: any) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      setCookie("user", action.payload);
      return { ...state, user: action.payload, loading: false };
    case "LOGIN_FAILED":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      deleteCookie("user");
      return AUTH_INITIAL_STATE();
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
