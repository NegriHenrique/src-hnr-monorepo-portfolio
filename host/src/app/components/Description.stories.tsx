import type { Meta, StoryObj } from "@storybook/react";
import { Description, DescriptionProps } from "./Description";

const meta: Meta<typeof Description> = {
  title: "Portfolio/Description",
  component: Description,
};
export default meta;

type Story = StoryObj<typeof Description>;

const mock: DescriptionProps = {
  text: "Sou apaixonado por criar produtos digitais que unem design, tecnologia e negócios. Atuo como Product Designer e Frontend Engineer, ajudando empresas a transformar ideias em experiências digitais de alto impacto.",
};

export const Default: Story = {
  args: mock,
};
