import styles from "./Button.module.scss";
import cn from "classnames";

export default function Button({
  children,
  disabled,
  type = "button",
  className,
}) {
  return (
    <button
      type={type}
      className={cn(
        styles.button,
        {
          [styles.buttonDisabled]: disabled,
        },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
