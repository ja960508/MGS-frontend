import React from "react";

const UserGreeting = (props) => {
  return (
    <h1>
      {props.name && `${props.name},`}, Welcome~~ It's{" "}
      {props.count && `${props.count} `}times.
    </h1>
  );
};

const GuestGreeting = () => {
  return <h1>Hello Guest, Please Sign Up!</h1>;
};

const Greeting = (props) => {
  if (props.isLoggedIn) {
    return <UserGreeting name='Am' count={1} />;
  }

  return props.isLoggedIn ? (
    <UserGreeting name='Am' count={1} />
  ) : (
    <GuestGreeting />
  );
};

const ConditionalRendering = (props) => {
  const isLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default ConditionalRendering;
