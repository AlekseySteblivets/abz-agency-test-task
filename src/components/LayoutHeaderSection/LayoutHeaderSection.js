import styles from "./LayoutHeaderSection.module.scss";

export default function LayoutHeaderSection({ children }) {
  return <header className={styles.section}>{children}</header>;
}
