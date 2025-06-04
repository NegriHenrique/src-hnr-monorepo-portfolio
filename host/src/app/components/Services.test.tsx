import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Services, ServicesProps } from "./Services";

describe("Services", () => {
  const props: ServicesProps = {
    services: [
      {
        title: "Website Design",
        description: "Design de interfaces modernas, responsivas e acessíveis.",
        icon: "💻",
      },
    ],
  };

  it("renderiza o título do serviço", () => {
    render(<Services {...props} />);
    expect(screen.getByText("Website Design")).toBeInTheDocument();
  });

  it("renderiza o ícone do serviço", () => {
    render(<Services {...props} />);
    expect(screen.getByText("💻")).toBeInTheDocument();
  });
});
