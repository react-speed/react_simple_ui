import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

test("my test", () => {
  const wrapper = render(<Button>按钮</Button>);
  const ele = wrapper.queryByText("按钮");
  expect(ele).toBeTruthy();
});