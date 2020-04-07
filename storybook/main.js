import { themes } from "@storybook/theming";

module.exports = {
  stories: ["../stories/**/*.story.[tj]s"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-notes/register"
  ]
};

addParameters({
  options: {
    theme: themes.dark
  }
});
