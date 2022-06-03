import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";

const Hello = () => {
  const id = useSelector((state: any) => state.user.id);
  const dispatch = useDispatch();

  const handleClickLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    console.log("Hello is Rendered");
  });

  return (
    <>
      <div>안녕하세요 {id}님!</div>
      <button type='button' onClick={handleClickLogout}>
        로그아웃
      </button>
    </>
  );
};

const Greeting = () => {
  const name = useSelector((state: any) => state.user.name);
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch({ type: "CHANGE_NAME", payload: e.target.value });
  };

  useEffect(() => {
    console.log("Greeting is Rendered");
  });

  return (
    <>
      <div>반갑습니다 {name}님!</div>
      <input type='text' value={name} onChange={handleChange} />
    </>
  );
};

const Form = () => {
  const [inputValue, setInputValue] = React.useState("");
  const dispatch = useDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch({ type: "LOGIN", payload: inputValue });
  };

  const handleChangeId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        data-testid='id-input'
        type='text'
        name='id'
        value={inputValue}
        onChange={handleChangeId}
      />
      <button type='button' onClick={handleClick}>
        회원가입
      </button>
    </div>
  );
};

const ReactReduxExample = () => {
  const id = useSelector((state: any) => state.user.id);

  return (
    <BrowserRouter>
      {id ? (
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Hello />
                <Greeting />
              </>
            }
          />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/register' element={<Form />} />
          <Route path='*' element={<Navigate to='/register' replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default ReactReduxExample;
