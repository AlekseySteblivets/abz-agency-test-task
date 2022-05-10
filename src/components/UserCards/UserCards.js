import React, { useState, useEffect } from "react";
import cn from "classnames";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { useUsers } from "../../api/queries/useUsers";

import Avatar from "../../lib/Avatar/Avatar";
import Button from "../../lib/Button";

import styles from "./UserCards.module.scss";

export default function UserCards() {
  const [pageNumber, setPageNumber] = useState(1);
  const [countUsers, setCountUsers] = useState(6);

  const { isLoading, error, data } = useUsers({
    page: pageNumber,
    count: countUsers,
  });
  console.log(data);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h2 className={cn(styles.title, styles.qwe)}>Working with GET request</h2>
      <ul className={styles.menu}>
        {/* {isLoading && <div>...loading</div>} */}
        {data?.users.map((user) => (
          <li className={styles.item} key={user.id}>
            <Avatar avatarImg={user.photo} />
            <p className={styles.name}>{user.name}</p>
            <p className={styles.position}>{user.position}</p>
            <Tooltip
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 1000 }}
              title={user.email}
            >
              <p className={styles.mail}>{user.email}</p>
            </Tooltip>

            <p className={styles.tel}>{user.phone}</p>
            {/* <a href="email:qwe@gmail.com">qwe@gmail.com</a> */}
            {/* <a href="tel:+380955859439">+380955859439</a> */}
          </li>
        ))}
      </ul>
      {data.total_pages !== data.page && (
        <Button type="submit" onClick={() => setPageNumber(pageNumber + 1)}>
          Show more
        </Button>
      )}
    </>
  );
}

// <li className={styles.item}>
//   <Avatar avatarImg={avatarImg} />
//   <p className={styles.name}>Simon</p>
//   <p className={styles.position}>President of Commerce</p>
//   <Tooltip
//     TransitionComponent={Fade}
//     TransitionProps={{ timeout: 1000 }}
//     title="Simon@gmail.com"
//   >
//     <p className={styles.mail}>Simon@gmail.com</p>
//   </Tooltip>

//   <p className={styles.tel}>+38 (098) 278 44 00</p>
// </li>
// <li className={styles.item}>
//   <Avatar avatarImg={avatarImg} />
//   <p className={styles.name}>Simon</p>
//   <p className={styles.position}>President of Commerce</p>
//   <Tooltip
//     TransitionComponent={Fade}
//     TransitionProps={{ timeout: 1000 }}
//     title="Simon@gmail.com"
//   >
//     <p className={styles.mail}>Simon@gmail.com</p>
//   </Tooltip>
//   <p className={styles.tel}>+38 (098) 278 44 00</p>
// </li>
