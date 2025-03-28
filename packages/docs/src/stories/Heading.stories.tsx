import { Heading, HeadingProps } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: "Custom title",
  },
  parameters: {
    docs: {
      description: {
        component:
          "Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`",
      },
    },
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },
};
