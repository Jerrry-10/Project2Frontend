import { expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Post from "src/pages/CreateBlog.jsx";

describe("create blog", async () => {
  it("should render the create blog page", async () => {
    const { getByText } = render(<Post />);
    const text = getByText("Create");
    expect(text).toBeInTheDocument();
  });
});
