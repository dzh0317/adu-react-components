import React from "react";
import { addDecorator, addParameters, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../src/styles/index.scss";
library.add(fas)
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
addParameters({ info: { inline: true, header: false } });
const styles: React.CSSProperties = {
  textAlign: "left",
};
const styleDecorator = (storyFn: any) => {
  return <div style={styles}>{storyFn()}</div>;
};
const loaderFn = () => {
  const allExports = [require("../src/welcome.stories.tsx")];
  const req = require.context("../src/components/", true, /\.stories\.tsx$/);
  req.keys().forEach((fname) => allExports.push(req(fname)));
  return allExports;
};
configure(loaderFn, module);
export const decorators = [styleDecorator];
