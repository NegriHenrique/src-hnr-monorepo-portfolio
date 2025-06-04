import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renderiza o texto de direitos reservados", () => {
    render(<Footer />);
    expect(screen.getByText(/Henrique Negri/)).toBeInTheDocument();
  });
});
