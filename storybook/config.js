import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { configureViewport } from "@storybook/addon-viewport";
import { withNotes } from "@storybook/addon-notes";
import { withKnobs } from "@storybook/addon-knobs";
import { withOptions } from "@storybook/addon-options";
import { version } from "../package.json";

import React from "react";
import { Provider } from "react-redux";
import { createStores } from "../src";

const globalRedux = fun => {
  return <Provider store={createStores()}>{fun()}</Provider>;
};

const req = require.context("../stories", true, /\.story\.js$/);
console.log(req.keys());
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// Story Decorators
addDecorator(withInfo({ inline: true, header: true }));
addDecorator(withNotes);
addDecorator(withKnobs);
configureViewport();

addDecorator(
  withOptions({
    goFullScreen: false,
    showAddonPanel: true,
    name: `ReactShared ${version}`,
    url: "localhost:3000",
    sidebarAnimations: true
  })
);

addDecorator(globalRedux());

configure(loadStories, module);
