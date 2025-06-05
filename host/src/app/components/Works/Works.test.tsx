import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Works, WorksProps } from ".";
import { worksData } from "@/app/_mocks/works.mock";

describe("Works", () => {
  const props: WorksProps = worksData;

  it("renderiza o título do trabalho", () => {
    render(<Works {...props} />);
    expect(screen.getByText("Microfrontend BG Remover")).toBeInTheDocument();
  });

  it("renderiza o link de estudo de caso", () => {
    render(<Works {...props} />);
    expect(screen.getByText("Estudo de caso")).toBeInTheDocument();
  });
});
