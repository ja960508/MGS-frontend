import { useEffect, useState } from "react";

const todos = [
  [
    {
      id: 2,
      value: "cook",
    },
    {
      id: 1,
      value: "homework",
    },
    {
      id: 3,
      value: "study",
    },
    {
      id: 4,
      value: "work out",
    },
  ],
  [
    {
      id: 3,
      value: "study",
    },
    {
      id: 1,
      value: "homework",
    },
    {
      id: 2,
      value: "cook",
    },
    {
      id: 4,
      value: "work out",
    },
  ],
  [
    {
      id: 4,
      value: "work out",
    },
    {
      id: 1,
      value: "homework",
    },
    {
      id: 2,
      value: "cook",
    },
    {
      id: 3,
      value: "study",
    },
  ],
];

const TodoApp = () => {
  const [items, setItems] = useState(todos[0]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const random = Math.floor(Math.random() * 3);
  //     console.log(random);
  //     setItems(todos[random]);
  //   }, 500);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  const handleDoneClick = (data) => {
    setItems((prev) => prev.filter((item) => item.id !== data.id));
  };

  return (
    <ul>
      {items.map((data) => (
        <li>
          <button onClick={() => handleDoneClick(data)}>{data.value}</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoApp;
