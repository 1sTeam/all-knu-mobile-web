import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FaSearch } from "react-icons/fa";
import { InputText } from "ui";

export default {
  title: "Common/InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  placeholder: "뭐라도 입력하세요",
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: "뭐라도 입력하세요",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <FaSearch size={18} color="gray" />,
  placeholder: "뭐라도 입력하세요",
};
