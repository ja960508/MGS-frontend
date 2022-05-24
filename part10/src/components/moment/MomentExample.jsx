import React from "react";
import moment from "moment";

const MomentExample = () => {
  const momentDate = moment();
  const newMomentDate = momentDate.add(1, "day");

  return (
    <>
      <h1>moment</h1>
      <div>{momentDate.format()}</div>
      <div>{newMomentDate.format()}</div>
    </>
  );
};

export default MomentExample;
