import type { Meta, StoryObj } from "@storybook/react";
import { Media, MediaProps } from ".";
import { mediaData } from "@/app/_mocks/media.mock";

const meta: Meta<typeof Media> = {
  title: "Portfolio/Media",
  component: Media,
};
export default meta;

type Story = StoryObj<typeof Media>;

const mock: MediaProps = mediaData;

export const Default: Story = {
  args: mock,
};
