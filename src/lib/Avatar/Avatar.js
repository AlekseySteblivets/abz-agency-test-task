import styles from "./Avatar.module.scss";

export default function Avatar({ avatarImg }) {
  return (
    <img alt="avatar user" src={avatarImg} className={styles.avatar}></img>
  );
}
