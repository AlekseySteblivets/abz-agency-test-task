import React from "react";

import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

import { useUsers } from "../../api/queries/useUsers";
import Avatar from "../../lib/Avatar/Avatar";
import Button from "../../lib/Button";
import Preloader from "../../lib/Preloader";

import styles from "./UserCards.module.scss";

export default function UserCards() {
  const { isLoading, error, data, isFetching, nextPage } = useUsers();

  if (isLoading) return <Preloader />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <h2 className={styles.title}>Working with GET request</h2>
      <ul className={styles.menu}>
        {data?.users.map((user) => (
          <li className={styles.item} key={user.id}>
            <Avatar avatarImg={user.photo} />
            <p className={styles.name}>{user.name}</p>
            <p className={styles.position}>{user.position}</p>
            <Tooltip
              classes={{
                tooltip: styles.tooltip,
                arrow: styles.arrow,
              }}
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 1000 }}
              title={user.email}
            >
              <p className={styles.mail}>{user.email}</p>
            </Tooltip>

            <p className={styles.tel}>{user.phone}</p>
          </li>
        ))}
      </ul>
      {isFetching && <Preloader />}
      {data.total_pages > data.page && (
        <Button type="submit" disabled={isFetching} onClick={nextPage}>
          Show more
        </Button>
      )}
    </>
  );
}
