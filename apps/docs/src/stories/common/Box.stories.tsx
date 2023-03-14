import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Box } from "ui";

export default {
  title: "Common/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: <div>Hello Children</div>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: <div>Hello Children</div>,
};
