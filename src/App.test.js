import { render, screen, fireEvent } from "@testing-library/react";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import SingleBook from "./components/SingleBook";

// 1)
it("mounts welcome correctly", () => {
  render(<Welcome />);
  const title = screen.getByText(/benvenuti in epibooks!/i);
  expect(title).toBeInTheDocument();
});
//

// 2)
it("check if the array length is correct", () => {
  render(<AllTheBooks />);
  const cards = screen.queryAllByTestId("cards");
  expect(cards).toHaveLength(150);
});

// 3)

// 5)
it("check if card border appears after click", () => {
  render(<SingleBook />);
  const cards = screen.queryByTestId("cards");
  fireEvent.click(cards);
  expect(cards).to;
});
