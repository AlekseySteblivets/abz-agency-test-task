import styles from "./Container.module.scss";
// import Navigation from "./components/Navigation";

export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
