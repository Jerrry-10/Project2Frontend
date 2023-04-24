import { expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../pages/contact";
import { BrowserRouter as Router } from "react-router-dom";

describe("render contact", async () => {
  it("render the contact page", async () => {
    const { getByText } = render(
      <Router>
        <Contact />
      </Router>
    );
    const header = getByText("CONTACT");
    expect(header).toBeInTheDocument();
  });
});
