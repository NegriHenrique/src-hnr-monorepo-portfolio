import type { Meta, StoryObj } from "@storybook/react";
import { Contacts, ContactsProps } from ".";
import { contactsData } from "../../../../_mocks/contact.mock";

const meta: Meta<typeof Contacts> = {
  title: "Portfolio/Contacts",
  component: Contacts,
};
export default meta;

type Story = StoryObj<typeof Contacts>;

const mock: Partial<ContactsProps> = {
  contacts: contactsData,
};

export const Default: Story = {
  args: mock,
};
