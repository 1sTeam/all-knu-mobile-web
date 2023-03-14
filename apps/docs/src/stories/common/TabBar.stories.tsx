import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TabBar } from "ui";

export default {
  title: "Common/TabBar",
  component: TabBar,
  argTypes: {},
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = (args) => <TabBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { value: "one", name: "One" },
    { value: "two", name: "Two" },
    { value: "three", name: "Three" },
    { value: "four", name: "Four" },
  ],
  index: 0,
  onChange: () => console.log("clicked"),
};
