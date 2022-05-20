import React, { useRef, useState } from "react";

const TodoExample = () => {
  let id = useRef(2);
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "study",
    },
    {
      id: 2,
      content: "coding",
    },
  ]);

  const handleClick = () => {
    const newTodos = [...todos];
    newTodos.unshift({
      id: ++id.current,
      content: `new Item`,
    });

    setTodos(newTodos);
  };

  return (
    <>
      <button onClick={handleClick}>Add Todo</button>
      <ul>
        {todos.map((item) => (
          <li>{item.content}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoExample;
