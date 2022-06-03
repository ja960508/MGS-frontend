import React from "react";
import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";
import { CTRstore } from "./CTRStore";

const Hello = ({ id, dispatch }: { id: string; dispatch: Function }) => {
  const handleClickLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <div>안녕하세요 {id}님!</div>
      <button type='button' onClick={handleClickLogout}>
        로그아웃
      </button>
    </>
  );
};

const Form = ({ dispatch }: { dispatch: Function }) => {
  const [inputValue, setInputValue] = React.useState("");

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

const ContextToRedux = () => {
  const [id, setId] = React.useState(CTRstore.getState().user);
  const dispatch = (action: any) => {
    CTRstore.dispatch(action);
    setId(CTRstore.getState().user);
  };

  return (
    <BrowserRouter>
      {id ? (
        <Routes>
          <Route path='/' element={<Hello id={id} dispatch={dispatch} />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path='/register' element={<Form dispatch={dispatch} />} />
          <Route path='*' element={<Navigate to='/register' replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default ContextToRedux;
