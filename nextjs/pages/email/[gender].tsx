import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
interface Props {
  someData: string;
  error: boolean;
}

const RandomEmail: NextPage<Props> = (props) => {
  return (
    <div>
      {props.error ? (
        <div>Gender param is Wrong.</div>
      ) : (
        <div>Hi {props.someData}</div>
      )}
      <Link href='/'>Reset</Link>
    </div>
  );
};

const exampleAPI = async (gender: "male" | "female") => {
  const response = await fetch(`https://randomuser.me/api/?gender=${gender}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();

  return res.results[0].email;
};

export const getServerSideProps: GetServerSideProps = async (props) => {
  const gender = props.query.gender;

  if (gender === "male" || gender === "female") {
    const randomMail = await exampleAPI(gender);

    return {
      props: { someData: randomMail },
    };
  }

  return {
    props: { someData: "", error: true },
  };
};

export default RandomEmail;
