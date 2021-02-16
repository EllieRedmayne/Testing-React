import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ClearList from "./";

const testProps = {
  buttonText: "Clear List",
  clearList: jest.fn(),
};

test("Test that the inner text of the <button> element is the value of the buttonText prop", () => {
  const { getByText } = render(<ClearList {...testProps} />);
  const actual = getByText("Clear List");
  expect(actual).toBeInTheDocument();
});

test("Test whether the addToList function is called when the button is clicked", () => {
  const { getByText } = render(<ClearList {...testProps} />);
  const actualButton = getByText("Clear List");
  fireEvent.click(actualButton);
  expect(testProps.clearList).toHaveBeenCalled();
});
