import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  const init = () => {
    console.log("This is my init Func");

    const items = localStorage.getItem("myItems");

    return items.split(",").map((data) => data * 2);
  };
  const [content, setContent] = useState(() => init());
  const [text, setText] = useState(() => "hello");
  const inputRef = useRef();

  return (
    <div>
      <ul>
        {content.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
      <input type='text' ref={inputRef} />

      <button
        onClick={() => {
          setContent((prev) => [...prev, Number(inputRef.current.value)]);
        }}
      >
        Submit
      </button>
    </div>
  );
};

{
  /* <button
        onClick={() => {
          console.log(inputRef.current.value);
          setContent((prev) => {
            const result = [...prev, Number(inputRef.current.value)];
            inputRef.current.value = "";
            console.log(result);
            return result;
          });
        }}
      >
        Submit
      </button> */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
