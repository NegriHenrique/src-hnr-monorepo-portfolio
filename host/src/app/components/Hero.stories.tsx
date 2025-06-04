import type { Meta, StoryObj } from "@storybook/react";
import { Hero, HeroProps } from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Portfolio/Hero",
  component: Hero,
};
export default meta;

type Story = StoryObj<typeof Hero>;

const mock: HeroProps = {
  name: "Henrique Negri",
  title: "Product Designer & Frontend Engineer",
  subtitle: "Construindo experiências digitais impactantes.",
  image: "/next.svg",
};

export const Default: Story = {
  args: mock,
};
