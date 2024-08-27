import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test-React", () => {
  test("renders learn react link", () => {
    render(<App />);
    const helloElement = screen.getByText(/hello/i);
    const btnElement = screen.getByRole("button");
    const inputElement = screen.getByPlaceholderText(/input value/i);
    expect(helloElement).toBeInTheDocument();
    expect(btnElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
});
