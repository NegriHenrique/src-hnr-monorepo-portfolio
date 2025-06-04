import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Contacts, ContactsProps } from "./Contacts";

describe("Contacts", () => {
  const props: ContactsProps = {
    contacts: [
      {
        label: "Email",
        value: "henrique.negri@email.com",
        link: "mailto:henrique.negri@email.com",
      },
    ],
  };

  it("renderiza o label do contato", () => {
    render(<Contacts {...props} />);
    expect(screen.getByText("Email:")).toBeInTheDocument();
  });

  it("renderiza o valor do contato", () => {
    render(<Contacts {...props} />);
    expect(screen.getByText("henrique.negri@email.com")).toBeInTheDocument();
  });
});
