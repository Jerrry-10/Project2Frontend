import { expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreatePost from "src/pages/CreateBlog.jsx";
import { BrowserRouter as Router } from "react-router-dom";

describe("create blog", async () => {
  it("should render the create blog page", async () => {
    const { getByText } = render(
      <Router>
        <CreatePost />
      </Router>
    );
    const button = getByText("Create Post");
    expect(button).toBeInTheDocument();
  });
});
