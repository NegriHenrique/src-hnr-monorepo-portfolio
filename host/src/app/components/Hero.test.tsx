import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hero, HeroProps } from "./Hero";

describe("Hero", () => {
  const props: HeroProps = {
    name: "Henrique Negri",
    title: "Product Designer & Frontend Engineer",
    subtitle: "Construindo experiências digitais impactantes.",
    image: "/next.svg",
  };

  it("renderiza nome, título e subtítulo", () => {
    render(<Hero {...props} />);
    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.subtitle)).toBeInTheDocument();
  });

  it("renderiza imagem com alt correto", () => {
    render(<Hero {...props} />);
    expect(screen.getByAltText(props.name)).toBeInTheDocument();
  });
});
