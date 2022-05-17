import styles from "./Navigation.module.scss";
import Button from "../../lib/Button/Button";
import logo from "../../assets/img/logo-png.png";

export default function Navigation() {
  return (
    <>
      <div className={styles.bgColor} />
      <nav className={styles.navigation}>
        <a href="/" className={styles.link}>
          <img
            alt="logo"
            src={logo}
            width="104"
            height="26"
            className={styles.headerlogo}
          />
        </a>
        <Button href="#userCards" className={styles.butNav}>
          User
        </Button>
        <Button
          href="#registerUserForm" // написать якорь
          className={styles.butNav}
        >
          Sing up
        </Button>
      </nav>
    </>
  );
}
