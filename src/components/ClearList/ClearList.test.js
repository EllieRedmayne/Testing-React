import React from "react";
import { render } from "@testing-library/react";
import ClearList from "./";

const testProps = {
  buttonText: "Clear List",
};

test("Test that the inner text of the <button> element is the value of the buttonText prop", () => {
  const { getByText } = render(<ClearList {...testProps} />);
  const actual = getByText("Clear List");
  expect(actual).toBeInTheDocument();
});
