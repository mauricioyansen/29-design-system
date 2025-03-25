import { Button, ButtonProps } from "@ignite-ui/react";
import { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Send",
    variant: { options: ["primary", "secondary", "tertiary"] },
    size: { options: ["sm", "md"] },
    onclick: { action: "click" },
    control: { type: "inline-radio" },
  },
  argTypes: {
    onclick: { action: "click" },
    variant: { options: ["primary", "secondary", "tertiary"] },
    size: { options: ["sm", "md"] },
    control: { type: "inline-radio" },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<typeof Button> = {
  args: { variant: "secondary", children: "Create new" },
};

export const Cancel: StoryObj<typeof Button> = {
  args: { variant: "tertiary", children: "Cancel" },
};

export const Small: StoryObj<typeof Button> = {
  args: { size: "sm" },
};

export const WithIcon: StoryObj<typeof Button> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<typeof Button> = {
  args: { disabled: true },
};
