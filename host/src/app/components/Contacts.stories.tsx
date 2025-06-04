import type { Meta, StoryObj } from "@storybook/react";
import { Contacts, ContactsProps } from "./Contacts";

const meta: Meta<typeof Contacts> = {
  title: "Portfolio/Contacts",
  component: Contacts,
};
export default meta;

type Story = StoryObj<typeof Contacts>;

const mock: ContactsProps = {
  contacts: [
    {
      label: "Email",
      value: "henrique.negri@email.com",
      link: "mailto:henrique.negri@email.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/henriquenegri",
      link: "https://linkedin.com/in/henriquenegri",
    },
    {
      label: "GitHub",
      value: "github.com/henriquenegri",
      link: "https://github.com/henriquenegri",
    },
  ],
};

export const Default: Story = {
  args: mock,
};
