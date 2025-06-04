import type { Meta, StoryObj } from "@storybook/react";
import { Works, WorksProps } from "./Works";

const meta: Meta<typeof Works> = {
  title: "Portfolio/Works",
  component: Works,
};
export default meta;

type Story = StoryObj<typeof Works>;

const mock: WorksProps = {
  works: [
    {
      id: 1,
      title: "Microfrontend BG Remover",
      description:
        "Estudo de caso sobre arquitetura de microfrontends para processamento de imagens.",
      image: "/file.svg",
      link: "/bg-remover",
      caseStudy: "/cases/bg-remover",
    },
    {
      id: 2,
      title: "Focus App",
      description: "Aplicativo de produtividade com foco em UX e performance.",
      image: "/window.svg",
      link: "/focus",
      caseStudy: "/cases/focus",
    },
  ],
};

export const Default: Story = {
  args: mock,
};
