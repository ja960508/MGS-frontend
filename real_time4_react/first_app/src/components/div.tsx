import { ReactNode, FC } from "react";

function Div(props: {
  name1: string;
  span1: ReactNode;
  span2: FC<{ name1: string; name2: string }>;
  children?: ReactNode;
}) {
  return (
    <>
      {props.span1}
      <div>div: {props.name1}</div>
      {<props.span2 name1='span2' name2='입니다.' />}
    </>
  );
}

export default Div;
