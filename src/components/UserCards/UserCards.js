import React from "react";
import cn from "classnames";

import styles from "./UserCards.module.scss";

export default function UserCards() {
  return (
    <>
      <h2 className={cn(styles.title, styles.qwe)}>Working with GET request</h2>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <img alt="avatar" src="../../img/svg/avatar-user.png" width="70" />
          <p className={styles.name}>Salvador Stewart Flynn Thomas Salva...</p>
          <p className={styles.position}>
            Leading specialist of the department o...
            JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
          </p>
          {/* <a href="email:qwe@gmail.com">qwe@gmail.com</a> */}
          {/* <a href="tel:+380955859439">+380955859439</a> */}
        </li>
        <li className={styles.item}>
          <img alt="avatar" src="../../img/svg/avatar-user.png" width="70" />
          <p className={styles.name}>Salvador Stewart Flynn Thomas Salva...</p>
          <p className={styles.position}>
            Leading specialist of the department o...
            JeromeKlarkaJeromeKlarka19233623... +38 (098) 278 76 24
          </p>
          {/* <a href="email:qwe@gmail.com">qwe@gmail.com</a> */}
          {/* <a href="tel:+380955859439">+380955859439</a> */}
        </li>
      </ul>
    </>
  );
}
