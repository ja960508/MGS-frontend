import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { wait } from "@testing-library/user-event/dist/utils";

test("form이 렌더링 되나?", () => {
  render(<App />);

  const idDiv = screen.getByTestId("idInputDiv");
  const passwordDiv = screen.getByTestId("passwordInputDiv");
  const idInput = screen.getByTestId("idInput");
  const passwordInput = screen.getByTestId("passwordInput");

  expect(idDiv).toBeInTheDocument();
  expect(passwordDiv).toBeInTheDocument();
  expect(idInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test("아무것도 입력하지 않았을 때", () => {
  render(<App />);

  const idDiv = screen.getByTestId("idInputDiv");
  const passwordDiv = screen.getByTestId("passwordInputDiv");
  const idInput = screen.getByTestId("idInput");
  const passwordInput = screen.getByTestId("passwordInput");

  expect(idDiv.textContent).toBe("유효하지 않은 id입니다.");
  expect(passwordDiv.textContent).toBe("유효하지 않은 password입니다.");
  expect(idInput.textContent).toBe("");
  expect(passwordInput.textContent).toBe("");
});

test("유효한 id를 입력했을 때", () => {
  render(<App />);
  const idDiv = screen.getByTestId("idInputDiv");
  const idInput: HTMLInputElement = screen.getByTestId("idInput");

  fireEvent.change(idInput, { target: { value: "12345678" } });

  expect(idDiv.textContent).toBe("");
  // 에러 메시지가 없어짐
  expect(idInput.value).toBe("12345678");
});

test("유효한 password를 입력했을 때", () => {
  render(<App />);
  const passwordDiv = screen.getByTestId("passwordInputDiv");
  const passwordInput: HTMLInputElement = screen.getByTestId("passwordInput");

  fireEvent.change(passwordInput, { target: { value: "abcdefghijklmnop" } });

  expect(passwordDiv.textContent).toBe("");
  expect(passwordInput.value).toBe("abcdefghijklmnop");
});

test("유효한 값을 안 넣고 회원가입을 했을 때", () => {
  render(<App />);

  const idDiv = screen.getByTestId("idInputDiv");
  const passwordDiv = screen.getByTestId("passwordInputDiv");
  const idInput: HTMLInputElement = screen.getByTestId("idInput");
  const passwordInput: HTMLInputElement = screen.getByTestId("passwordInput");
  const registerButton = screen.getByTestId("registerButton");

  fireEvent.change(idInput, { target: { value: "1234" } });
  fireEvent.change(passwordInput, { target: { value: "abcdefg" } });

  expect(idDiv.textContent).toBe("유효하지 않은 id입니다.");
  expect(passwordDiv.textContent).toBe("유효하지 않은 password입니다.");

  fireEvent.click(registerButton);

  expect(idInput.value).toBe("");
  // 회원가입 실패면 id 값부터 초기화됨
});

test("유효한 값을 넣고 회원가입을 했을 때", () => {
  render(<App />);

  const idDiv = screen.getByTestId("idInputDiv");
  const passwordDiv = screen.getByTestId("passwordInputDiv");
  const idInput = screen.getByTestId("idInput");
  const passwordInput = screen.getByTestId("passwordInput");
  const registerButton = screen.getByTestId("registerButton");

  fireEvent.change(idInput, { target: { value: "12345678" } });
  fireEvent.change(passwordInput, { target: { value: "abcdefghijklmnop" } });

  expect(idDiv.textContent).toBe("");
  expect(passwordDiv.textContent).toBe("");

  fireEvent.click(registerButton);
  // 회원가입이 성공하면 새로운 컴포넌트가 렌더링됨

  expect(screen.getByTestId("welcomeBox")).toBeInTheDocument();
  // 새롭게 생성된 컴포넌트가 document에 있는지?
});
