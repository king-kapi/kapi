import React from "react";
import styles from "@/styles/Button.module.css";
import Icon from "@/components/icons/Icon";
import Icons from "@/components/icons/Icons";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  htmlType?: "button" | "submit" | "reset",
  type?: "primary" | "secondary",
  size?: "small" | "large",
  icon?: Icons,
  className?: string,
}

const Button = ({
                  children,
                  type = "primary",
                  size = "small",
                  icon,
                  htmlType,
                  className,
                  ...props
                }: ButtonProps) => {
  return (
    <button className={[
      styles.Button,
      size === "small" ? styles.Small : styles.Large,
      type === "primary" ?
        "bg-primary-100 hover:bg-primary-170 active:bg-primary-90" :
        "bg-grey hover:bg-mediumGrey active:bg-pressedGrey",
      "inline-flex items-center justify-center",
      className
    ].join(" ")}
            type={htmlType}
            {...props}
    >
      {icon ?
        <Icon icon={icon} className={children ? "mr-2.5" : ""}/> // no margin if icon only
        : <></>}
      {children}
    </button>
  );
};

export default Button;