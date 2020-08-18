import React from "react";
interface IHelloWorldProps {
  message?: string;
}
const HelloWord:React.FC<IHelloWorldProps> = (props) => {
  return <div>{props.message}</div>;
};
HelloWord.defaultProps = {
  message: 'dzh'
}
export default HelloWord;
