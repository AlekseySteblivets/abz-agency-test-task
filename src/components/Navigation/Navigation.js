import styles from "./Navigation.module.scss";
import Button from "../../lib/Button/Button";
import logo from "../../assets/img/logo-png.png";
// import { useToken } from "../../api/queries/useToken";
import { tokenService } from "../../api/services/tokenService";

export default function Navigation() {
  // const { data } = useToken();

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
        <Button className={styles.butNav}>User</Button>
        <Button
          href="#" // написать якорь
          className={styles.butNav}
          type="submit"
          // onClick={() => tokenService.getToken()}
        >
          Sing up
        </Button>
      </nav>
    </>
  );
}
