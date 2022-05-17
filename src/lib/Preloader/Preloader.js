import preloaderImg from "../../assets/img/preloader.png";

import styles from "./Preloader.module.scss";

export default function Preloader() {
  return (
    <div>
      <img
        alt="waiting"
        src={preloaderImg}
        width="48"
        className={styles.imgPreloader}
      />
    </div>
  );
}
