import styles from "./Navigation.module.scss";
import Button from "../../lib/Button/Button";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <a href="./#" className={styles.link}>
        <img
          alt="logo"
          src="../../assets/img/logo.svg"
          width="104"
          className={styles.headerlogo}
        />
      </a>
      <Button>User</Button>
      <Button>Sing up</Button>
    </nav>
  );
}
