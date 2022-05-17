import React from "react";
import styles from "./LayoutSection.module.scss";
import cn from "classnames";

export default function LayoutSection({ children, element = "section", id }) {
  const className = cn(styles.section);

  return React.createElement(element, { className, id }, children);
}
