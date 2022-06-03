import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";

const defaultValue = "hello";
const myContext = createContext({
  text: defaultValue,
  changeText: () => {},
});

const ContextStore = ({ children }: { children: ReactElement }) => {
  const [text, setText] = useState(defaultValue);
  const changeText = () => {
    setText((prev) => prev + "1");
  };

  return (
    <myContext.Provider value={{ text, changeText }}>
      {children}
    </myContext.Provider>
  );
};

const ContextChildText = () => {
  const { text, changeText } = useContext(myContext);

  return (
    <div>
      <div>{text}</div>
      <button onClick={() => changeText()}>Click Me</button>
    </div>
  );
};

export default ContextChildText;
