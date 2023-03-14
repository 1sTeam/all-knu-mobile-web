import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "ui";

export default {
  title: "Common/Container",
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Title = Template.bind({});
Title.args = {
  title: "제목명",
  children: <div>Hello World</div>,
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  children: <div>Hello World</div>,
};
