import React from "react";
import { render, screen } from "@testing-library/react";
import { service } from ".";
import App from "./App";

test("renders learn react link", () => {
  render(<App service={service} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
