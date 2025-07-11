import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Description, DescriptionProps } from ".";
import { descriptionData } from "../../../../_mocks/description.mock";

describe("Description", () => {
  const props: DescriptionProps = descriptionData;

  it("renderiza o texto da descrição", () => {
    render(<Description {...props} />);
    expect(screen.getByText(props.text)).toBeInTheDocument();
  });
});
