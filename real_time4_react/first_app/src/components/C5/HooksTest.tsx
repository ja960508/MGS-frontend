import React, { useEffect } from "react";

const HooksTest = () => {
  const [value, setValue] = React.useState("");
  const [number, setNumber] = React.useState<number>(3);
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timer;

    if (value) {
      setNumber(3);
      interval = setInterval(() => setNumber((prev) => prev - 1), 1000);
      timeout = setTimeout(() => {
        console.log(value);
        clearInterval(interval);
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [value]);

  return (
    <>
      <input
        type='number'
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <span>{number}초 남았습니다!</span>
    </>
  );
};

export default HooksTest;
