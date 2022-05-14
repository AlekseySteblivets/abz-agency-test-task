import styles from "./Button.module.scss";
import cn from "classnames";

export default function Button({
  onClick = () => {},
  children,
  disabled,
  type = "button",
  className,
}) {
  return (
    <button
      onClick={onClick}
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
