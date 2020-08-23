import React from "react";
import classNames from "classnames";

interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, className, style, children,disabled } = props;
  const classes = classNames("menu-item", className, {
    'is-disabled': disabled
  });

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default MenuItem