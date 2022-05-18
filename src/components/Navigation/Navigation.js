import Button from "../../lib/Button/Button";
import logo from "../../assets/img/logo-png.png";

import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <>
      <div className={styles.bgColor} />
      <nav className={styles.navigation}>
        <a href="/" className={styles.logoLink}>
          <img
            alt="logo"
            src={logo}
            width="104"
            height="26"
            className={styles.headerlogo}
          />
        </a>
        <div className={styles.butNavigation}>
          <Button href="#userCards">User</Button>
          <Button href="#registerUserForm">Sing up</Button>
        </div>
      </nav>
    </>
  );
}
