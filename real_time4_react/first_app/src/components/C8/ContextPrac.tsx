import React, { useContext, createContext, useState } from "react";

type myContext = {
  [key: string]: string | React.Dispatch<React.SetStateAction<string>>;
};
const defaultName = "asdf";
const NameContext = createContext<any>({});

const Hello1 = () => {
  const contextObj = useContext(NameContext);
  console.log(typeof contextObj.setText);
  return (
    <div>
      this is Hello1. and Name is {contextObj.text}
      <Hello4 />
      <input
        onChange={(e) => {
          if (typeof contextObj.setText === "function") {
            contextObj.setText(e.target.value);
          }
        }}
      />
    </div>
  );
};
const Hello4 = () => {
  const contextObj = useContext(NameContext);
  return (
    <div>
      this is Hello4
      <div>Hello {contextObj.text}!</div>
    </div>
  );
};
const ContextPrac = () => {
  const [text, setText] = useState<string>("");

  return (
    <NameContext.Provider value={{ text, setText }}>
      <Hello1 />
    </NameContext.Provider>
  );
};

export default ContextPrac;
