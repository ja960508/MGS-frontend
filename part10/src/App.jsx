import React, { useRef, useState } from "react";
import Memoization from "./Memoization";
import MyFunctionComponent from "./MyFunctionComponent";
import MyClassComponent from "./MyClassComponent";
import "./App.css";

const App = () => {
  // return <Memoization />;
  // return <MyClassComponent />;
  return <MyFunctionComponent />;
  // return (
  //   <>
  //     <MyClassComponent />
  //     <MyFunctionComponent />
  //   </>
  // );
};

export default App;
