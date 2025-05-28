import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("renderiza o botão com o label", () => {
    render(<Button label="Clique aqui" />);
    expect(screen.getByText("Clique aqui")).toBeInTheDocument();
  });
});
