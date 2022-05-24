import React from "react";
const arr = Array.from(Array(100), (_, i) => i + 1);

const Calc = () => {
  const [result, setResult] = React.useState<number>(0);
  const [inputsState, setInputsState] = React.useState<{
    [key: string]: string;
  }>({});
  const onHandleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputsState({ ...inputsState, [e.target.name]: e.target.value });
  };

  const calculate = () => {
    let total = 0;

    for (const inputName in inputsState) {
      total += Number(inputsState[inputName]);
    }

    setResult(total);
  };

  return (
    <>
      {arr.map((num, i) => {
        return (
          <>
            <input
              type='number'
              name={`input-${num}`}
              onChange={onHandleChange}
            />
            {i !== arr.length - 1 ? "+" : "="}
          </>
        );
      })}
      <input type='number' disabled value={result} />
      <button type='button' onClick={calculate}>
        계산
      </button>
    </>
  );
};

export default Calc;
