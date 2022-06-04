import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Link href='/email/male'>go random male email</Link> <br />
      <Link href='/email/female'>go random female email</Link>
    </>
  );
};

export default Home;
