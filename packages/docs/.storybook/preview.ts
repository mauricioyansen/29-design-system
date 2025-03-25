import type { Preview } from "@storybook/react";
import { background, themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    docs: { theme: themes.dark },
    background: { default: "dark" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
