import styles from "./LayoutHeroSection.module.scss";

export default function name({ children }) {
  return <div className={styles.section}>{children}</div>;
}
