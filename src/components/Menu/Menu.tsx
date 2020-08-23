import React from "react";
import classNames from "classnames";

type MenuMode = "horizontal" | "vertical";

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: string) => void;
}

const Menu: React.FC<MenuProps> = (props) => {
  const { defaultIndex, className, mode, style, children } = props;
  const classes = classNames("menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode === "horizontal",
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};
Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};
export default Menu;
