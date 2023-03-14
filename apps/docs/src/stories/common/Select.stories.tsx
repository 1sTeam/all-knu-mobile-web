import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "ui";

export default {
  title: "Common/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {};
