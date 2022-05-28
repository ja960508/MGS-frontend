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
  useNavigate,
  useParams,
  Link,
  Navigate,
} from "react-router-dom";

const ControlledInputTest = () => {
  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nextPath, setNextPath] = useState<string>("/");

  const handleClick = () => {
    const setters = [setId, setPassword];
    const refs = [idRef, passwordRef];
    let isValid = true;

    refs.forEach((ref, index) => {
      if (!isValid) {
        setters[index]("");
      } else if (ref.current && !inputValidationCheck(ref)) {
        alert(`${ref.current.name}이 유효하지 않습니다!`);
        ref.current.focus();
        setters[index]("");
        isValid = false;
      }
    });

    if (isValid) {
      setNextPath(`/welcome/${id}`);
    }
  };

  const inputValidationCheck = (
    inputType: React.RefObject<HTMLInputElement>
  ) => {
    if (inputType.current) {
      const [name, length] = [
        inputType.current.name,
        inputType.current.value.length,
      ];

      switch (name) {
        case "id":
          return length >= 6 && length <= 20;
        case "password":
          return length >= 12 && length <= 20;
        default:
      }
    }
  };

  const checkSubmitable = () => {
    if (id || password) {
      return false;
    }
    return true;
  };

  return (
    <div>
      <div>
        <input
          type='text'
          name='id'
          placeholder='6글자 이상 20글자 이하'
          onChange={(e) => setId(e.target.value)}
          value={id}
          ref={idRef}
          autoComplete='off'
        />
        {!inputValidationCheck(idRef) && <span>유효하지 않은 id입니다.</span>}
      </div>
      <div>
        <input
          type='password'
          name='password'
          placeholder='12글자 이상 20글자 이하'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          ref={passwordRef}
          autoComplete='new-password'
        />
        {!inputValidationCheck(passwordRef) && (
          <span>유효하지 않은 password입니다.</span>
        )}
      </div>
      <Link to={nextPath}>
        <button
          type='button'
          onClick={handleClick}
          disabled={checkSubmitable()}
        >
          회원가입
        </button>
      </Link>
    </div>
  );
};

const Welcome = () => {
  const id = useParams().id;

  return (
    <div>
      <div>{id}님 안녕하세요~~</div>
      <Link to='/'>
        <button>로그아웃</button>
      </Link>
    </div>
  );
};

export const Main = () => {
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

const RefTest = () => {
  const input = React.useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleClick = () => {
    if (input.current) {
      input.current.value = "";
      setInputValue(input.current.value);
    }
  };

  const handleChange = () => {
    if (input.current) {
      setInputValue(input.current.value);
    }
  };

  return (
    <div>
      <div>현재 value는 {inputValue}입니다.</div>
      <input type='text' ref={input} onChange={handleChange} />
      <button type='button' onClick={handleClick}>
        Click to Reset
      </button>
    </div>
  );
};

export default RefTest;
