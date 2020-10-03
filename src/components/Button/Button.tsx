import React, { ReactNode } from "react";
import classNames from "classnames";

type ButtonSize = "lg" | "sm";
type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children?: ReactNode;
  href?: string;
}

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 * 页面中最常用的按钮元素，适合于完成特定交互
 *
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'my-react-components'
 *
 * ~~~
 */
const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    href,
    ...restProps
  } = props;
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  btnType: "default",
  disabled: false,
};

export default Button;
