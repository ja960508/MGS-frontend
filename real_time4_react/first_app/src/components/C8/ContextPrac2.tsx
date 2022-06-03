import React, { createContext, useContext, useEffect, useState } from "react";

const defaultUser = {
  name: "jin",
  id: "woorung",
};
const NameContext = createContext(defaultUser.name);
const IdContext = createContext(defaultUser.id);

const HelloName = () => {
  const name = useContext(NameContext);

  useEffect(() => {
    console.log("Name render");
  });

  return <div>this is HelloName. and Name is {name}</div>;
};

const HelloId = React.memo(() => {
  const id = useContext(IdContext);

  useEffect(() => {
    console.log("id render");
  });

  return <div>this is HelloId. and Id is {id}</div>;
});

const NoContextComponent = React.memo(() => {
  useEffect(() => {
    console.log("I don't use Context");
  });

  return <div>I don't use Context</div>;
});

const ContextPrac2 = () => {
  const [id, setId] = useState(defaultUser.id);
  const [name, setName] = useState(defaultUser.name);

  return (
    <NameContext.Provider value={name}>
      <IdContext.Provider value={id}>
        <NoContextComponent />
        <HelloId />
        <HelloName />
        <button
          onClick={() => {
            setName((prev) => prev + "1");
          }}
        >
          ChangeName
        </button>
        <button
          onClick={() => {
            setId((prev) => prev + "1");
          }}
        >
          ChangeId
        </button>
      </IdContext.Provider>
    </NameContext.Provider>
  );
};

export default ContextPrac2;
