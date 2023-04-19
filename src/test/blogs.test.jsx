import { expect, test } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Blog from "src/pages/blogs.jsx";

describe("blog", async () => {
  it("should render the blog page", async () => {
    const { getByText } = render(<Blog />); // Update the usage of the component
    const text = getByText("My Blog");
    expect(text).toBeInTheDocument();
  });
});
