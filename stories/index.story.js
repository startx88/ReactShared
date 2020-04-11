import React from "react";
import { storiesOf } from "@storybook/react";
import { DemoComponent } from "../src";

storiesOf("DemoComponent", module).add(
  "Pass Children",
  () => {
    return <DemoComponent>Hello</DemoComponent>;
  },
  {
    info: {
      text: `🔨 Import:
        
      import { DemoComponent } from "../src"'
`
    },
    notes: "Can storybook display the sample html code for the component"
  }
);
