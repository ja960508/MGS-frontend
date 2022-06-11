import React, { useRef, useState } from "react";

const FormUsingCookie = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (idRef.current && passwordRef.current) {
      document.cookie = `user = ${idRef.current.value}`;
    }
  };

  console.log(user);

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='id' ref={idRef} />
      <input type='password' placeholder='password' ref={passwordRef} />
      <button type='submit'>Register</button>
    </form>
  );
};

export default FormUsingCookie;
