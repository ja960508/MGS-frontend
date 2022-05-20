import React, { memo, useCallback, useState } from "react";

const Button = memo((props) => {
  console.log("Button render");

  // return <button onClick={props.onClick}>Add!!</button>;
  return <button onClick={props.onClick}>6</button>;
});

const CallbackTest = () => {
  const [count, setCount] = useState(0);

  const myCallback = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const addCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      {/* <Button onClick={() => setCount(count + 1)}></Button> */}
      {/* <Button onClick={myCallback} /> */}
      <Button onClick={addCount}></Button>

      <p>현재는 {count}입니다~~</p>
    </>
  );
};

export default CallbackTest;
