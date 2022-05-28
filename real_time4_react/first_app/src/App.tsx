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

const App = () => {
  return <MainRouterTest />;
};

export default App;
