import React, { useState, useContext, createContext } from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";

const authContext = createContext({
  id: "",
  setRegistedId: (id: string) => {},
});

const checkIdValid = (id: string) => {
  return id.length >= 6 && id.length <= 20;
};
const checkPasswordValid = (password: string) => {
  return password.length >= 12 && password.length <= 20;
};

const ControlledInputTest = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const idInput = React.useRef<HTMLInputElement>(null);
  const passwordInput = React.useRef<HTMLInputElement>(null);
  const { id: registeredId, setRegistedId } = useContext(authContext);

  if (registeredId) {
    return <Navigate to='/' />;
  }

  const handleClick = () => {
    if (!checkIdValid(id)) {
      setId("");
      idInput.current?.focus();
      alert("유효하지 않은 id입니다.");
      return;
    }
    if (!checkPasswordValid(password)) {
      setPassword("");
      passwordInput.current?.focus();
      alert("유효하지 않은 password입니다.");
      return;
    }

    setRegistedId(id);
  };

  return (
    <div>
      <div>
        <input
          type='text'
          name='id'
          placeholder='6글자 이상 20글자 이하'
          ref={idInput}
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        {!checkIdValid(id) && "유효하지 않은 id입니다."}
      </div>
      <div>
        <input
          type='text'
          name='password'
          placeholder='12글자 이상 20글자 이하'
          ref={passwordInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!checkPasswordValid(password) && "유효하지 않은 password입니다."}
      </div>
      <button
        type='button'
        onClick={handleClick}
        disabled={!(id.length || password.length)}
      >
        회원가입
      </button>
    </div>
  );
};

const Welcome = () => {
  const { id: registeredId, setRegistedId } = useContext(authContext);

  if (!registeredId) {
    return <Navigate to='/register' />;
  }

  return (
    <div data-testid='welcomeBox'>
      <div>{registeredId}님 안녕하세요~~</div>
      <Link to='/'>
        <button onClick={() => setRegistedId("")}>로그아웃</button>
      </Link>
    </div>
  );
};

export const ContextFormPrac = () => {
  const [id, setId] = useState("");
  const setRegistedId = (value: string) => {
    setId(value);
  };

  return (
    <authContext.Provider value={{ id, setRegistedId }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/register' element={<ControlledInputTest />} />
        </Routes>
      </BrowserRouter>
    </authContext.Provider>
  );
};

// import React from 'react';
// import { createContext, useContext } from "react";
// import { Navigate, BrowserRouter, Route, Routes } from "react-router-dom";

// const IdContext = createContext({ id: '', setId: (id: string) => {} });

// const Hello = () => {
//   const { id, setId } = useContext(IdContext);
//   const handleClickLogout = () => {
//     setId('');
//   }
//   return (
//     <>
//       <div>안녕하세요 {id}님!</div>
//       <button type='button' onClick={handleClickLogout}>로그아웃</button>
//     </>
//   );
// }

// const Form = () => {
//   const { setId } = useContext(IdContext);
//   const [inputValue, setInputValue] = React.useState('');

//   const handleClick: React.MouseEventHandler<HTMLButtonElement>= (e) => {
//     setId(inputValue);
//   };

//   const handleChangeId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//     setInputValue(e.target.value);
//   }

//   return (
//     <div>
//       <input
//         data-testid='id-input'
//         type="text"
//         name='id'
//         value={inputValue}
//         onChange={handleChangeId}
//       />
//       <button
//         type="button"
//         onClick={handleClick}
//       >
//         회원가입
//       </button>
//     </div>
//   );
// }

// const App = () => {
//   const [id, setId] = React.useState('');
//   const contextValue = {
//     id,
//     setId,
//   }
//   return (
//     <IdContext.Provider value={contextValue}>
//       <BrowserRouter>
//         {id ? (
//           <Routes>
//             <Route path="/" element={<Hello />} />
//             <Route path="*" element={<Navigate to='/' replace />} />
//           </Routes>
//         ) : (
//           <Routes>
//             <Route path="/register" element={<Form />} />
//             <Route path="*" element={<Navigate to='/register' replace />} />
//           </Routes>
//         )}
//       </BrowserRouter>
//     </IdContext.Provider>
//   );
// }

// export default App;
