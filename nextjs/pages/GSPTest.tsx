import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const GSPTest: NextPage = (props: any) => {
  console.log(props);

  return (
    <div>
      <span>Hello</span>
      <Link href={"/"}>링크</Link>
    </div>
  );
};

export const getServerSideProps = async () => {
  console.log("props gets");

  return { props: { name: "" } };
};

export default GSPTest;
