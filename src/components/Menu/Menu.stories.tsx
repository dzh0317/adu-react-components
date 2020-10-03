import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const defaultMenu = () => (
  <Menu
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
);
storiesOf("Menu Component", module).add("Menu", defaultMenu);
