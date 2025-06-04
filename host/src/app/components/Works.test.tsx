import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Works, WorksProps } from "./Works";

describe("Works", () => {
  const props: WorksProps = {
    works: [
      {
        id: 1,
        title: "Microfrontend BG Remover",
        description:
          "Estudo de caso sobre arquitetura de microfrontends para processamento de imagens.",
        image: "/file.svg",
        link: "/bg-remover",
        caseStudy: "/cases/bg-remover",
      },
    ],
  };

  it("renderiza o título do trabalho", () => {
    render(<Works {...props} />);
    expect(screen.getByText("Microfrontend BG Remover")).toBeInTheDocument();
  });

  it("renderiza o link de estudo de caso", () => {
    render(<Works {...props} />);
    expect(screen.getByText("Estudo de caso")).toBeInTheDocument();
  });
});
