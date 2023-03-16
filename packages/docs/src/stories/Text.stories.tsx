import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@fs-ignite-ui/react";

export default {
  title: "Form/Text",
  component: Text,
  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, voluptates autem. Iusto odit eligendi porro rerum quas temporibus ipsam sunt. Doloribus qui quos, autem error velit est explicabo delectus tempora!",
  },

  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],

      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
