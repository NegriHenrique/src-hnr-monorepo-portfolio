import type { Meta, StoryObj } from "@storybook/react";
import { Services, ServicesProps } from ".";

const meta: Meta<typeof Services> = {
  title: "Portfolio/Services",
  component: Services,
};
export default meta;

type Story = StoryObj<typeof Services>;

const mock: ServicesProps = {
  services: [
    {
      title: "Website Design",
      description: "Design de interfaces modernas, responsivas e acessíveis.",
      icon: "💻",
    },
    {
      title: "Frontend Development",
      description:
        "Desenvolvimento de aplicações web performáticas e escaláveis.",
      icon: "⚡",
    },
    {
      title: "Project Consulting",
      description: "Consultoria em arquitetura, UX e estratégia digital.",
      icon: "🧠",
    },
  ],
};

export const Default: Story = {
  args: mock,
};
