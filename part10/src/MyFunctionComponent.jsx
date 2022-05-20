import { useState, useEffect } from "react";

function MyComponent() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component is Mounted??");

    return () => {
      console.log("Component will be unmounted??");
    };
  }, []);

  useEffect(() => {
    console.log("Component is updated");
  }, [counter]);

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCounter((prev) => prev - 1);
  };

  console.log("   실행");
  return (
    <div>
      Hello I'm a Counter
      <span>{` current count is ${counter}`}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

function MyFunctionComponent() {
  const [flag, setFlag] = useState(true);
  const [dummy, setDummy] = useState(false);

  const handleClick = () => {
    setFlag((prev) => !prev);
  };

  const _handleClick = () => {
    setDummy((prev) => !prev);
  };

  return (
    <div className='App'>
      {flag && <MyComponent />}
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={_handleClick}>Do not affect to inner component~</button>
    </div>
  );
}

export default MyFunctionComponent;
