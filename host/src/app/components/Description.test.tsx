import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Description, DescriptionProps } from "./Description";

describe("Description", () => {
  const props: DescriptionProps = {
    text: "Sou apaixonado por criar produtos digitais que unem design, tecnologia e negócios.",
  };

  it("renderiza o texto da descrição", () => {
    render(<Description {...props} />);
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
