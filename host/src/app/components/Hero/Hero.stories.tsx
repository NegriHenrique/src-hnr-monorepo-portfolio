import type { Meta, StoryObj } from "@storybook/react";
import { Hero, HeroProps } from ".";
import { heroData } from "../../_mocks/hero.mock";

const meta: Meta<typeof Hero> = {
  title: "Portfolio/Hero",
  component: Hero,
};
export default meta;

type Story = StoryObj<typeof Hero>;

const mock: HeroProps = heroData;

export const Default: Story = {
  args: mock,
};
