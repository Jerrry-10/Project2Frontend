import { expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditPost from "..//components//editPost";

describe("blog", async () => {
  it("should load", async () => {
    const { getByText } = render(<EditPost />);
    const text = getByText("Loading...");
    expect(text).toBeInTheDocument();
  });
});
