import "./App.css";
import React from "react";
import RefTest, { Main } from "./components/RefTest";
import { MainRouterTest } from "./components/RefRouterTest";
import HooksTest from "./components/C5/HooksTest";
import RouterExample from "./components/C6/RouterExample";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Link,
  Navigate,
} from "react-router-dom";
import KeyframePrac from "./components/C7/KeyframePrac";
import ContextPrac from "./components/C8/ContextPrac";
import { ContextFormPrac } from "./components/C8/ContextFormPrac";

const App = () => {
  return <ContextFormPrac />;
};

export default App;
