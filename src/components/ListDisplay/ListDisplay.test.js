import React from "react";
import { render } from "@testing-library/react";
import ListDisplay from "./";

const testProps = {
  list: ["apple", "banana"],
  tickItem: jest.fn(),
};

test("Test that the <ol> element contains the correct number of components", () => {
  const { getByTestId } = render(<ListDisplay {...testProps} />);
  const actual = getByTestId("ol-test");
  expect(actual).toBeInTheDocument();
});

test("Test that the <ol> element contains the correct number of components", () => {
  const { getAllByTestId } = render(<ListDisplay {...testProps} />);
  const actual = getAllByTestId("list-item");
  expect(actual).toHaveLength(2);
});
