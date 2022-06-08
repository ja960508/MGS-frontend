import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

const exampleAPI = async (gender: "male" | "female") => {
  const response = await fetch(`https://randomuser.me/api/?gender=${gender}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();

  return res.results[0].email;
};

const createRequestThunk =
  (gender: "male" | "female") => async (dispatch: any, getState: any) => {
    console.log("hello");
    dispatch({ type: "LOGIN_START" });

    try {
      const result = await exampleAPI(gender);
      dispatch({ type: "LOGIN_SUCCESS", payload: result });
    } catch (e) {
      dispatch({ type: "LOGIN_FAILED", payload: e });
    }
  };

const MyPage = (props: { user: string }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>Hi {props.user}</div>
      <button onClick={() => dispatch({ type: "LOGOUT" })}>로그아웃</button>
    </div>
  );
};

const Auth = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const loading = useSelector((state: RootState) => state.auth.loading);
  const dispatch = useDispatch();
  const genderRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (genderRef.current) {
      const gender = genderRef.current.value;

      if (gender === "male" || gender === "female") {
        dispatch(createRequestThunk(gender) as any);
      } else {
        alert("잘못된 값을 입력했습니다.");
      }
    }
  };

  return user ? (
    <MyPage user={user} />
  ) : (
    <form onSubmit={onSubmit}>
      <input name='gender' type='text' ref={genderRef} />
      <button type='submit'>로그인</button>
      {loading && <div>로딩 중입니다...</div>}
    </form>
  );
};

export default Auth;
