import styles from "./Button.module.scss";
import cn from "classnames";

export default function Button({
  onClick = () => {},
  href,
  children,
  disabled,
  type = "button",
  className,
}) {
  const Tag = ({ ...props }) =>
    href ? <a {...props} /> : <button {...props} />;

  return (
    <Tag
      href={href}
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
    </Tag>
  );
}
