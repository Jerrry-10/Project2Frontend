import { expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "..//components//sidebar//Sidebar";

describe("sidebar", async () => {
  it("should render the sidebar page", async () => {
    const { getByText } = render(<Sidebar />);
    const text = getByText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero fugiat sequi harum officiis tempora?"
    );

    expect(text).toBeInTheDocument();
  });
});
