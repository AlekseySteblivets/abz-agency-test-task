import styles from "./Button.module.scss";
import cn from "classnames";

export default function Button({ children, disabled }) {
  return (
    <button
      type="button"
      className={cn(styles.button, {
        [styles.buttonDisabled]: disabled,
      })}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
