import { expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "..//components//header//Header";

describe("header", async () => {
  it("should render the header page", async () => {
    const { getByText } = render(<Header />);
    const text = getByText("Awesome");
    const text2 = getByText("Awesome");
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
});
