import type { Meta, StoryObj } from "@storybook/react";
import { Title, TitleProps } from ".";

const meta: Meta<typeof Title> = {
  title: "Portfolio/Title",
  component: Title,
};
export default meta;

type Story = StoryObj<typeof Title>;

const mock: TitleProps = {
  variant: "presetH1",
  children: "Title",
};

export const Default: Story = {
  args: mock,
};
