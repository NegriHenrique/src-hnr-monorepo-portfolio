import type { Meta, StoryObj } from "@storybook/react";
import { Services, ServicesProps } from ".";
import { servicesData } from "@/app/_mocks/service.mock";

const meta: Meta<typeof Services> = {
  title: "Portfolio/Services",
  component: Services,
};
export default meta;

type Story = StoryObj<typeof Services>;

const mock: ServicesProps = {
  services: servicesData,
};

export const Default: Story = {
  args: mock,
};
