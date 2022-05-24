import React, { ReactNode } from "react";

function Span(props: { name1: string; name2: string; children?: ReactNode }) {
  return (
    <span>
      span: {props.name1} {props.name2}
    </span>
  );
}
export default Span;
