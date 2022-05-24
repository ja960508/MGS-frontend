import React from "react";
import dayjs from "dayjs";

const DayJsExample = () => {
  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");

  return (
    <>
      <div>{dayjsDate.format()}</div>
      <div>{newDayjsDate.format()}</div>
    </>
  );
};

export default DayJsExample;
