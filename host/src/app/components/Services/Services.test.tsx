import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Services, ServicesProps } from ".";
import { servicesData } from "@/app/_mocks/service.mock";

describe("Services", () => {
  const props: ServicesProps = {
    services: servicesData,
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
