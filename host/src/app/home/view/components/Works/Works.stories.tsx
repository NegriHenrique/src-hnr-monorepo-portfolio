import type { Meta, StoryObj } from "@storybook/react";
import { Works, WorksProps } from ".";
import { worksData } from "@/app/_mocks/works.mock";

const meta: Meta<typeof Works> = {
  title: "Portfolio/Works",
  component: Works,
};
export default meta;

type Story = StoryObj<typeof Works>;

const mock: WorksProps = worksData;

export const Default: Story = {
  args: mock,
};
