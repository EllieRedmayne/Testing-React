import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddItem from "./";

const testProps = {
  buttonText: "Add To List",
  addToList: jest.fn(),
};

test("Test that the inner text of the <button> element is the value of the buttonText prop", () => {
  const { getByText } = render(<AddItem {...testProps} />);
  const actual = getByText("Add To List");
  expect(actual).toBeInTheDocument();
});

test("Test whether the addToList function is called when the button is clicked", () => {
  const { getByText } = render(<AddItem {...testProps} />);
  const actualButton = getByText("Add To List");
  fireEvent.click(actualButton);
  expect(testProps.addToList).toHaveBeenCalled();
});
