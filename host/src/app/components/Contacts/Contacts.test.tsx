import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Contacts, ContactsProps } from ".";
import { contactsData } from "../../_mocks/contract.mock";

describe("Contacts", () => {
  const props: ContactsProps = {
    contacts: contactsData,
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
