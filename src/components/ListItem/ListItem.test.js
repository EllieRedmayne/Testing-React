import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ListItem from "./";

const testProps = {
  name: "Tea",
  completed: true,
  tickItem: jest.fn(),
};

test("Test that the inner text of the <li> element is the value of the name props", () => {
  const { getByText } = render(<ListItem {...testProps} />);
  const actual = getByText("Tea");
  expect(actual).toBeInTheDocument();
});

test("Test that the class of the <li> element is 'tickedItem' if the completed boolean is false, or 'untickedItem' if it is true", () => {
  const { getByTestId } = render(<ListItem {...testProps} />);
  const actual = getByTestId("class");
  expect(actual).toHaveClass("tickedItem");
});

test("Test whether the addToList function is called when the <li> is clicked", () => {
  const { getByTestId } = render(<ListItem {...testProps} />);
  const actualButton = getByTestId("class");
  fireEvent.click(actualButton);
  expect(testProps.tickItem).toHaveBeenCalled();
});
