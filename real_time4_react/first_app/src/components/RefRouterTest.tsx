import React, {
  ReactEventHandler,
  useState,
  useRef,
  ChangeEventHandler,
  ChangeEvent,
} from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  Link,
  Navigate,
} from "react-router-dom";

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
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

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

    setIsSuccess(true);
  };

  const handleChangeId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setId(e.target.value);
  };

  const handleChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setPassword(e.target.value);
  };

  if (isSuccess) {
    return <Navigate to={`/welcome/${id}`} />;
  }

  return (
    <div>
      <div data-testid='idInputDiv'>
        <input
          type='text'
          name='id'
          placeholder='6글자 이상 20글자 이하'
          ref={idInput}
          value={id}
          onChange={handleChangeId}
          data-testid='idInput'
        />
        {!checkIdValid(id) && "유효하지 않은 id입니다."}
      </div>
      <div data-testid='passwordInputDiv'>
        <input
          type='text'
          name='password'
          placeholder='12글자 이상 20글자 이하'
          ref={passwordInput}
          value={password}
          onChange={handleChangePassword}
          data-testid='passwordInput'
        />
        {!checkPasswordValid(password) && "유효하지 않은 password입니다."}
      </div>

      {/* {checkIdValid(id) && checkPasswordValid(password) ? (
        <Link to={`/welcome/${id}`}>
          <button
            type='button'
            onClick={handleClick}
            disabled={!(id.length || password.length)}
          >
            회원가입
          </button>
        </Link>
      ) : (
        <button
          type='button'
          onClick={handleClick}
          disabled={!(id.length || password.length)}
        >
          회원가입
        </button>
      )} */}
      <button
        type='button'
        data-testid='registerButton'
        onClick={handleClick}
        disabled={!(id.length || password.length)}
      >
        회원가입
      </button>
    </div>
  );
};

const Welcome = () => {
  const id = useParams().id;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target);
  };

  return (
    <div data-testid='welcomeBox'>
      <div>{id}님 안녕하세요~~</div>
      <Link to='/'>
        <button>로그아웃</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type='text' name='board' />
        <button type='submit'>게시글 생성</button>
      </form>
    </div>
  );
};

export const MainRouterTest = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ControlledInputTest />} />
        <Route path='/welcome/:id' element={<Welcome />} />
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};
