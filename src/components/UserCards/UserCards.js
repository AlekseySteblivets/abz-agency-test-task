import React from "react";
import cn from "classnames";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

import Avatar from "../../lib/Avatar/Avatar";

import styles from "./UserCards.module.scss";

export default function UserCards() {
  return (
    <>
      <h2 className={cn(styles.title, styles.qwe)}>Working with GET request</h2>
      <ul className={styles.menu}>
        <li className={styles.item}>
          <Avatar />
          <p className={styles.name}>Simon</p>
          <p className={styles.position}>
            President of Commerce Simon@gmail.com +38 (098) 278 44 00
          </p>
          <Tooltip title="Simon@gmail.com">
            <p className={styles.mail}>Simon@gmail.com</p>
          </Tooltip>

          <p className={styles.tel}>+38 (098) 278 44 00</p>
          {/* <a href="email:qwe@gmail.com">qwe@gmail.com</a> */}
          {/* <a href="tel:+380955859439">+380955859439</a> */}
        </li>
        <li className={styles.item}>
          <Avatar />
          <p className={styles.name}>Simon</p>
          <p className={styles.position}>
            President of Commerce Simon@gmail.com +38 (098) 278 44 00
          </p>
          <Tooltip
            // className={styles.color}
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 1000 }}
            title="Simon@gmail.com"
          >
            <p className={styles.mail}>Simon@gmail.com</p>
          </Tooltip>
          <p className={styles.tel}>+38 (098) 278 44 00</p>
        </li>
      </ul>
    </>
  );
}
