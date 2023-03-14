import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "ui";

export default {
  title: "Common/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
  size: "md",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  label: "Button",
};
