import React from "react";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "../src/styles/index.scss";

const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};
const storyWrapper = (storyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
);
addDecorator(storyWrapper);
addDecorator(withInfo);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
const styles: React.CSSProperties = {
  textAlign: "left",
};
const styleDecorator = (storyFn: any) => {
  return <div style={styles}>{storyFn()}</div>;
};
export const decorators = [styleDecorator];
