import React from "react";
import { render } from "@testing-library/react";
import AddItem from "./";

const testProps = {
  buttonText: "Add To List",
};

test("Test that the inner text of the <button> element is the value of the buttonText prop", () => {
  const { getByText } = render(<AddItem {...testProps} />);
  const actual = getByText("Add To List");
  expect(actual).toBeInTheDocument();
});
