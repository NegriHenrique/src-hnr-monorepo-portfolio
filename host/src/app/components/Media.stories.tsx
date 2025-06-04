import type { Meta, StoryObj } from "@storybook/react";
import { Media, MediaProps } from "./Media";

const meta: Meta<typeof Media> = {
  title: "Portfolio/Media",
  component: Media,
};
export default meta;

type Story = StoryObj<typeof Media>;

const mock: MediaProps = {
  videos: [
    {
      type: "video",
      title: "Como pensar microfrontends",
      url: "https://youtube.com/henrique-microfrontends",
    },
    {
      type: "video",
      title: "Design para devs",
      url: "https://youtube.com/henrique-design",
    },
  ],
  writings: [
    {
      type: "writing",
      title: "Microfrontends na prática",
      url: "https://blog.example.com/microfrontends",
    },
    {
      type: "writing",
      title: "Design Systems escaláveis",
      url: "https://blog.example.com/design-systems",
    },
  ],
};

export const Default: Story = {
  args: mock,
};
