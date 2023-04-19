import { expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreatePost from "src/pages/CreateBlog.jsx";

describe("create blog", async () => {
  it("should render the create blog page", async () => {
    const { getByText } = render(<CreatePost />);
    const button = getByText("Create Post");
    expect(button).toBeInTheDocument();
  });
});
