import { expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "..//components//navigation//Navigation";
import { MemoryRouter } from "react-router-dom";

describe("navigation", async () => {
  it("should render the navigation page", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const text = getByText("Home");
    const text2 = getByText("Create");
    expect(text).toBeInTheDocument();
    expect(text2).toBeInTheDocument();
  });
});
