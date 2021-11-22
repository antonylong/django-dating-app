import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../src/components/App";

describe("<App />", () => {
  it("matches snapshot on initial render", () => {
    const component = render(<App />);
    expect(component.baseElement).toMatchSnapshot();
  });
});
