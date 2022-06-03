import "./App.css";
import React, { useState, ReactElement, useEffect } from "react";
import Counter from "./components/C9/ReduxPrac1";
import { Provider } from "react-redux";
import store from "./components/C9/ReactReduxStore";
import ReactReduxExample from "./components/C9/ReactReduxExample";

const Test2 = () => {
  useEffect(() => {
    console.log(" Children is Rendered");
  });

  return <div>Hello World!</div>;
};

const Test = ({ children }: { children: ReactElement }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Parent is Rendered");
  });
  return (
    <>
      <div>Render Props Child</div>
      {children}
      <button onClick={() => setNumber((prev) => prev + 1)}>{number}</button>
    </>
  );
};

const TestWithNoChildren = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Parent is Rendered");
  });
  return (
    <>
      <div>Render Normal Component</div>
      <Test2 />
      <button onClick={() => setNumber((prev) => prev + 1)}>{number}</button>
    </>
  );
};

const App = () => {
  return (
    <>
      <Test>
        <Test2 />
      </Test>
      <TestWithNoChildren />
    </>
  );
};

export default App;
