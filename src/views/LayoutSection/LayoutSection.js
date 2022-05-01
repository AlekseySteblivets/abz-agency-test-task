import React from "react";
import styles from "./LayoutSection.module.scss";

export default function LayoutSection({ children, element = "div" }) {
  const className = styles.section;

  return React.createElement(element, { className }, children);
}
