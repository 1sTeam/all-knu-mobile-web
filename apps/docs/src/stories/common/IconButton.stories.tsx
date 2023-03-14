import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FaHeart } from "react-icons/fa";
import { IconButton } from "ui";

export default {
  title: "Common/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  icon: <FaHeart size={16} color="white" />,
  primary: true,
  label: "IconButton",
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: <FaHeart size={16} color="#6260ED" />,
  label: "IconButton",
};
