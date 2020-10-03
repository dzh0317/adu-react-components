import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

// const styles: React.CSSProperties = {
//   textAlign: "left",
// };
// const styleDecorator = (storyFn: any) => {
//   return <div style={styles}>{storyFn()}</div>;
// };
const defaultButton = () => {
  return <Button onClick={action("clicked")}> default Button </Button>;
};
const sizeButton = () => {
  return (
    <>
      <Button size="sm"> default Button </Button>
      <Button> default Button </Button>
      <Button size="lg"> default Button </Button>
    </>
  );
};
const typeButton = () => {
  return (
    <>
      <Button btnType="danger"> danger Button </Button>
      <Button btnType="primary"> primary Button </Button>
      <Button btnType="link" href="http://www.baidu.com">
        {" "}
        link Button{" "}
      </Button>
    </>
  );
};
const disabledButton = () => {
  return (
    <>
      <Button disabled> disabled Button </Button>
      <Button btnType="link" href="http://www.baidu.com" disabled>
        {" "}
        disabled link Button{" "}
      </Button>
    </>
  );
};
storiesOf("Button Component", module)
  // .addDecorator(styleDecorator) // 可以在.storybook/preview.tsx文件中配置
  // .addParameters({
  //   info: { text: `
  //     ### this is very nice component
  //     ~~~js
  //     const a = '100'
  //     ~~~
  //   ` },
  //   inline: false,
  // })
  .add("Button", defaultButton)
  .add("不同大小", sizeButton)
  .add("不同样式", typeButton)
  .add("禁用状态", disabledButton);
