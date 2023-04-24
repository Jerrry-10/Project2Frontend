import { expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditPost from "..//components//editPost";
import { BrowserRouter as Router } from "react-router-dom";

describe("blog", async () => {
  it("should load", async () => {
    const { getByText } = render(
      <Router>
        <EditPost />
      </Router>
    );
    const text = getByText("Loading...");
    expect(text).toBeInTheDocument();
  });
});
