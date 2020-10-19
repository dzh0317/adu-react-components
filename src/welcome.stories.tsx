import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1> 欢迎来到 adu-react-components 组件库</h1>
        <h1> 欢迎来到 adu-react-components 组件库</h1>
        <h1> 欢迎来到 adu-react-components 组件库</h1>
        <h1> 欢迎来到 adu-react-components 组件库</h1>
        <h1> 欢迎来到 adu-react-components 组件库</h1>
        <code>npm i adu-react-components</code>
      </>
    );
  },
  { info: { disable: true } }
);
