import React, { useRef, useState } from "react";
import "./App.css";

const Card = React.memo(({ user: { id, name }, onClick }) => {
  const [myState, setMyState] = useState(0);
  const calculate = React.useMemo(() => {
    console.log("calc");
    return id > 5 ? "lower" : "bigger";
  }, [id]);

  return (
    <div
      style={{ padding: "1rem", borderBottom: "1px solid gray" }}
      onClick={() => {
        setMyState((prev) => prev + 1);
        onClick(name);
      }}
    >
      <div>{`id: ${id}`}</div>
      <div>{`name: ${name}`}</div>
      <div>{`myState: ${myState}`}</div>
      <div>{calculate}</div>
    </div>
  );
});

const Memoization = () => {
  const [cards, setCards] = useState([
    {
      name: "kim",
      id: 1,
    },
    {
      name: "hello",
      id: 2,
    },
    {
      name: "jin",
      id: 3,
    },
  ]);

  const nextId = useRef(4);

  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;

    setCards((prev) => {
      return prev.concat({
        id: nextId.current++,
        name,
      });
    });

    e.target.reset();
  };

  const onClick = React.useCallback((target) => {
    console.log(target);
  }, []);

  return (
    <div>
      {cards.map((user) => (
        <Card key={user.id} user={user} onClick={onClick} />
      ))}

      <form onSubmit={onSubmit}>
        <input name='name' type='text' placeholder='name...' />
        <button type='submit'>등록</button>
      </form>
    </div>
  );
};

export default Memoization;
