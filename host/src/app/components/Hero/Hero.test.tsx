import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Hero, HeroProps } from ".";
import { heroData } from "../../_mocks/hero.mock";

describe("Hero", () => {
  const props: HeroProps = heroData;

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
