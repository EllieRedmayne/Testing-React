import React from "react";
import { render } from "@testing-library/react";
import ListItem from "./";

const testProps = {
  name: "bread",
  completed: true,
  tickItem: jest.fn(),
};
