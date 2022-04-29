import styles from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <a href="./#" className={styles.link}>
        <img
          alt="logo"
          src="../../../img/svg/logo.svg"
          width="104"
          className={styles.headerlogo}
        />
      </a>
      <button type="button" className={styles.button}>
        Users
      </button>
      <button type="button" className={styles.button}>
        Sing up
      </button>
    </nav>
  );
}

// className={styles.link styles.logo}
//   <a href="" className={styles.link styles.logo}>
//     <img
//       src="../img/svg/logo.svg"
//       alt="логотип"
//       width="136"
//       className={styles.header-logo}
//     />
//   </a>
//   <button className={styles.nav-btn} type="button">
//     Заказать
//   </button>
