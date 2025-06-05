import type { Meta, StoryObj } from "@storybook/react";
import { Description, DescriptionProps } from ".";
import { descriptionData } from "../../_mocks/description.mock";

const meta: Meta<typeof Description> = {
  title: "Portfolio/Description",
  component: Description,
};
export default meta;

type Story = StoryObj<typeof Description>;

const mock: DescriptionProps = descriptionData;

export const Default: Story = {
  args: mock,
};
